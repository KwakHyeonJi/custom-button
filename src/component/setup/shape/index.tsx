import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'redux/modules';
import {
  BorderStyle,
  changeShapeBorderStyle,
  changeShapeBorderWidth,
  changeShapeBorderRadius,
} from 'redux/modules/custom';
import OptionRadio from 'component/OptionRadio';
import { ItemWrapper, NameWrapper } from 'component/Wrapper';
import useInputs from 'hook/useInputs';

const CustomShape = () => {
  const customs = useSelector((state: RootState) => state.custom);
  const { id, shapeBorderWidth, shapeBorderStyle, shapeBorderRadius } = customs.find((custom) => custom.show);
  const dispatch = useDispatch();

  const Border = () => {
    const minWidth = 1;
    const maxWidth = 80;

    const styles: BorderStyle[] = ['Solid', 'Dotted', 'Dashed', 'Double', 'Groove', 'Ridge', 'Inset', 'Outset'];

    const [{ bdWidth, bdStyle }, onChange, onSubmit, setValue] = useInputs({
      bdWidth: shapeBorderWidth,
      bdStyle: shapeBorderStyle,
    });

    const handleBlur = () => {
      if (parseInt(bdWidth, 10) < minWidth) {
        setValue('bdWidth', minWidth.toString());
        dispatch(changeShapeBorderWidth(id, minWidth.toString()));
      } else if (parseInt(bdWidth, 10) > maxWidth) {
        setValue('bdWidth', maxWidth.toString());
        dispatch(changeShapeBorderWidth(id, maxWidth.toString()));
      } else {
        dispatch(changeShapeBorderWidth(id, bdWidth));
      }
    };

    const handleStyleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.target as Element;
      const targetId = target.id as BorderStyle;
      setValue('bdStyle', targetId);
      dispatch(changeShapeBorderStyle(id, targetId));
    }, []);

    useEffect(() => {
      setValue('bdWidth', shapeBorderWidth);
      setValue('bdStyle', shapeBorderStyle);
    }, [id]);

    return (
      <ItemWrapper>
        <div>
          <NameWrapper>Border Style</NameWrapper>
          <form onSubmit={onSubmit}>
            <input
              type="number"
              name="bdWidth"
              min={minWidth}
              max={maxWidth}
              value={bdWidth}
              onChange={onChange}
              onBlur={handleBlur}
            />
            px
          </form>
        </div>
        <OptionsWrapper>
          {styles.map((style) => (
            <OptionRadio key={style} id={style} name="border_style" checked={bdStyle} onChange={handleStyleChange} />
          ))}
        </OptionsWrapper>
      </ItemWrapper>
    );
  };

  const BorderRadius = () => {
    const minRadius = 0;
    const maxRadius = 200;

    const [{ bdRadius }, onChange, onSubmit, setValue] = useInputs({
      bdRadius: shapeBorderRadius,
    });

    const handleBlur = () => {
      if (parseInt(bdRadius, 10) < minRadius) {
        setValue('bdRadius', minRadius.toString());
        dispatch(changeShapeBorderRadius(id, minRadius.toString()));
      } else if (parseInt(bdRadius, 10) > maxRadius) {
        setValue('bdRadius', maxRadius.toString());
        dispatch(changeShapeBorderRadius(id, maxRadius.toString()));
      } else {
        dispatch(changeShapeBorderRadius(id, bdRadius));
      }
    };

    useEffect(() => {
      setValue('bdRadius', shapeBorderRadius);
    }, [id]);

    return (
      <ItemWrapper>
        <div>
          <NameWrapper>Border Radius</NameWrapper>
          <form onSubmit={onSubmit}>
            <input
              type="number"
              name="bdRadius"
              min={minRadius}
              max={maxRadius}
              value={bdRadius}
              onChange={onChange}
              onBlur={handleBlur}
            />
            px
          </form>
        </div>
      </ItemWrapper>
    );
  };

  return (
    <ul>
      <Border />
      <BorderRadius />
    </ul>
  );
};

const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0;
`;

export default CustomShape;
