import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ColorResult } from 'react-color';

import { RootState } from 'redux/modules';
import {
  changeColorBackground,
  changeColorTransparent,
  changeColorBorder,
  changeColorText,
} from 'redux/modules/custom';
import { ColorPicker, Swatch } from 'component/ColorPicker';
import OptionCheckbox from 'component/OptionCheckbox';
import { ItemWrapper, NameWrapper } from 'component/Wrapper';
import useInputs from 'hook/useInputs';

const CustomColor = () => {
  const customs = useSelector((state: RootState) => state.custom);
  const { id, colorBackground, colorTransparent, colorBorder, colorText } = customs.find((custom) => custom.show);
  const dispatch = useDispatch();

  const Background = () => {
    const [{ bg, tp }, onChange, onSubmit, setValue] = useInputs({ bg: colorBackground, tp: colorTransparent });
    const [displayPicker, setDisplayPicker] = useState(false);

    useEffect(() => {
      setValue('bg', colorBackground);
      setValue('tp', colorTransparent);
    }, [id]);

    return (
      <ItemWrapper>
        <div>
          <NameWrapper>Background Color</NameWrapper>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="bg"
              placeholder={bg}
              value={bg}
              maxLength={7}
              disabled={tp}
              onChange={onChange}
              onBlur={() => {
                dispatch(changeColorBackground(id, bg));
              }}
            />
          </form>
          <Swatch
            onClick={() => {
              setDisplayPicker(true);
            }}
            hex={bg}
            disabled={tp}
          />
          {displayPicker && (
            <ColorPicker
              hex={bg}
              onClose={() => {
                setDisplayPicker(false);
              }}
              onChange={(c: ColorResult) => {
                setValue('bg', c.hex);
              }}
              onChangeComplete={() => {
                dispatch(changeColorBackground(id, bg));
              }}
            />
          )}
        </div>
        <OptionCheckbox
          name="Transparent"
          checked={tp}
          onChange={useCallback(() => {
            setValue('tp', !tp);
            dispatch(changeColorTransparent(id));
          }, [])}
        />
      </ItemWrapper>
    );
  };

  const Border = () => {
    const [{ bd }, onChange, onSubmit, setValue] = useInputs({ bd: colorBorder });
    const [displayPicker, setDisplayPicker] = useState(false);

    useEffect(() => {
      setValue('bd', colorBorder);
    }, [id]);

    return (
      <ItemWrapper>
        <div>
          <NameWrapper>Border Color</NameWrapper>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="bd"
              placeholder="no-border"
              value={bd}
              maxLength={7}
              onChange={onChange}
              onBlur={() => {
                dispatch(changeColorBorder(id, bd));
              }}
            />
          </form>
          <Swatch
            onClick={() => {
              setDisplayPicker(true);
            }}
            hex={bd}
          />
          {displayPicker && (
            <ColorPicker
              hex={bd}
              onClose={() => {
                setDisplayPicker(false);
              }}
              onChange={(c: ColorResult) => {
                setValue('bd', c.hex);
              }}
              onChangeComplete={() => {
                dispatch(changeColorBorder(id, bd));
              }}
            />
          )}
        </div>
      </ItemWrapper>
    );
  };

  const Text = () => {
    const [{ txt }, onChange, onSubmit, setValue] = useInputs({ txt: colorText });
    const [displayPicker, setDisplayPicker] = useState(false);

    useEffect(() => {
      setValue('txt', colorText);
    }, [id]);

    return (
      <ItemWrapper>
        <div>
          <NameWrapper>Text Color</NameWrapper>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="txt"
              placeholder={txt}
              value={txt}
              maxLength={7}
              onChange={onChange}
              onBlur={() => {
                dispatch(changeColorText(id, txt));
              }}
            />
          </form>
          <Swatch
            onClick={() => {
              setDisplayPicker(true);
            }}
            hex={txt}
          />
          {displayPicker && (
            <ColorPicker
              hex={txt}
              onClose={() => {
                setDisplayPicker(false);
              }}
              onChange={(c: ColorResult) => {
                setValue('txt', c.hex);
              }}
              onChangeComplete={() => {
                dispatch(changeColorText(id, txt));
              }}
            />
          )}
        </div>
      </ItemWrapper>
    );
  };

  return (
    <ul>
      <Background />
      <Border />
      <Text />
    </ul>
  );
};

export default CustomColor;
