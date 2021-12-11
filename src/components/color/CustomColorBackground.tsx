import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ColorResult } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'store/modules';
import { changeColorBackground, changeColorTransparent } from 'store/modules/custom';
import { ColorPicker, Swatch } from 'components/ColorPicker';
import OptionCheckbox from 'components/OptionCheckbox';
import Title from 'components/Title';

const Wrapper = styled.div`
  display: flex;
  height: 33px;
  margin-top: 15px;
`;

const StyledSet = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  height: 100%;

  form {
    height: 100%;
  }
`;

const StyledInput = styled.input`
  width: 150px;
  height: 100%;
  padding: 5px 8px;

  border: 1px solid #b0bec5;
  border-radius: 5px;
  color: #455a64;
  font-size: 1rem;

  &:disabled {
    background: #eef1f7;
  }
`;

const ColorPickerWrapper = styled.div`
  position: absolute;
  margin-top: 240px;
  margin-left: 420px;
  z-index: 2;
`;

const CustomColorBackground = () => {
  const customs = useSelector((state: RootState) => state.custom);
  const dispatch = useDispatch();
  const { id, colorBackground, colorTransparent } = customs.find((custom) => custom.show);

  const inputRef = useRef(null);

  const [value, setValue] = useState(colorBackground);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [transparent, setTransparent] = useState(colorTransparent);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleBlur = () => dispatch(changeColorBackground(id, value));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    inputRef.current.blur();
  };

  const handleOpenColor = () => {
    if (!transparent) setDisplayColorPicker(true);
  };
  const handleChangeColor = (c: ColorResult) => setValue(c.hex);
  const handleCloseColor = () => {
    setDisplayColorPicker(false);
    dispatch(changeColorBackground(id, value));
  };

  const handleChangeTransparent = () => {
    setTransparent(!transparent);
    dispatch(changeColorTransparent(id));
  };

  useEffect(() => {
    setValue(colorBackground);
    setTransparent(colorTransparent);
  }, [id]);

  return (
    <Wrapper>
      <StyledSet>
        <Title>Background Color</Title>
        <form onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="#5844cf"
            ref={inputRef}
            value={value}
            maxLength={7}
            disabled={transparent}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </form>
        <Swatch onClick={handleOpenColor} hex={value} />
        {displayColorPicker && (
          <ColorPickerWrapper>
            <ColorPicker hex={value} onClose={handleCloseColor} onChange={handleChangeColor} />
          </ColorPickerWrapper>
        )}
      </StyledSet>
      <OptionCheckbox id="Transparent" checked={transparent} onChange={handleChangeTransparent} />
    </Wrapper>
  );
};

export default CustomColorBackground;
