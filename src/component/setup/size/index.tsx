import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'redux/modules';
import { changeSizeWidth, changeSizeHeight, changeSizeText } from 'redux/modules/custom';
import OptionRange from 'component/OptionRange';
import { ItemWrapper, NameWrapper } from 'component/Wrapper';
import useInputs from 'hook/useInputs';

const CustomSize = () => {
  const customs = useSelector((state: RootState) => state.custom);
  const { id, sizeWidth, sizeHeight, sizeText } = customs.find((custom) => custom.show);
  const dispatch = useDispatch();

  const Width = () => {
    const minWidth = 40;
    const maxWidth = 800;
    const [{ width }, onChange, onSubmit, setValue] = useInputs({ width: sizeWidth });

    const handleBlur = () => {
      if (parseInt(width, 10) < minWidth) {
        setValue('width', minWidth.toString());
        dispatch(changeSizeWidth(id, minWidth.toString()));
      } else if (parseInt(width, 10) > maxWidth) {
        setValue('width', maxWidth.toString());
        dispatch(changeSizeWidth(id, maxWidth.toString()));
      } else {
        dispatch(changeSizeWidth(id, width));
      }
    };

    useEffect(() => {
      setValue('width', sizeWidth);
    }, [id]);

    return (
      <ItemWrapper>
        <div>
          <NameWrapper>Width</NameWrapper>
          <form onSubmit={onSubmit}>
            <input
              type="number"
              name="width"
              min={minWidth}
              max={maxWidth}
              value={width}
              onChange={onChange}
              onBlur={handleBlur}
            />
            px
          </form>
        </div>
        <OptionRange
          min={minWidth}
          max={maxWidth}
          value={width}
          onChange={(e) => {
            setValue('width', e.target.value);
          }}
          onMouseUp={() => {
            dispatch(changeSizeWidth(id, width));
          }}
        />
      </ItemWrapper>
    );
  };

  const Height = () => {
    const minHeight = 20;
    const maxHeight = 400;
    const [{ height }, onChange, onSubmit, setValue] = useInputs({ height: sizeHeight });

    const handleBlur = () => {
      if (parseInt(height, 10) < minHeight) {
        setValue('height', minHeight.toString());
        dispatch(changeSizeHeight(id, minHeight.toString()));
      } else if (parseInt(height, 10) > maxHeight) {
        setValue('height', maxHeight.toString());
        dispatch(changeSizeHeight(id, maxHeight.toString()));
      } else {
        dispatch(changeSizeHeight(id, height));
      }
    };

    useEffect(() => {
      setValue('height', sizeHeight);
    }, [id]);

    return (
      <ItemWrapper>
        <div>
          <NameWrapper>Height</NameWrapper>
          <form onSubmit={onSubmit}>
            <input
              type="number"
              name="height"
              min={minHeight}
              max={maxHeight}
              value={height}
              onChange={onChange}
              onBlur={handleBlur}
            />
            px
          </form>
        </div>
        <OptionRange
          min={minHeight}
          max={maxHeight}
          value={height}
          onChange={(e) => {
            setValue('height', e.target.value);
          }}
          onMouseUp={() => {
            dispatch(changeSizeHeight(id, height));
          }}
        />
      </ItemWrapper>
    );
  };

  const Text = () => {
    const minText = 10;
    const maxText = 200;
    const [{ txt }, onChange, onSubmit, setValue] = useInputs({ txt: sizeText });

    const handleBlur = () => {
      if (parseInt(txt, 10) < minText) {
        setValue('txt', minText.toString());
        dispatch(changeSizeText(id, minText.toString()));
      } else if (parseInt(txt, 10) > maxText) {
        setValue('txt', maxText.toString());
        dispatch(changeSizeText(id, maxText.toString()));
      } else {
        dispatch(changeSizeText(id, txt));
      }
    };

    useEffect(() => {
      setValue('txt', sizeText);
    }, [id]);

    return (
      <ItemWrapper>
        <div>
          <NameWrapper>Text</NameWrapper>
          <form onSubmit={onSubmit}>
            <input
              type="number"
              name="txt"
              min={minText}
              max={maxText}
              value={txt}
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
      <Width />
      <Height />
      <Text />
    </ul>
  );
};

export default CustomSize;
