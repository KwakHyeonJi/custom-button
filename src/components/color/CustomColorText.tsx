import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ColorResult } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'store/modules';
import { changeColorText } from 'store/modules/custom';
import { ColorPicker, Swatch } from 'components/ColorPicker';
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
`;

const ColorPickerWrapper = styled.div`
  position: absolute;
  margin-top: 240px;
  margin-left: 420px;
  z-index: 2;
`;

const CustomColorText = () => {
  const customs = useSelector((state: RootState) => state.custom);
  const dispatch = useDispatch();
  const { id, colorText } = customs.find((custom) => custom.show);

  const inputRef = useRef(null);

  const [value, setValue] = useState(colorText);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleBlur = () => dispatch(changeColorText(id, value));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    inputRef.current.blur();
  };

  const handleOpenColor = () => setDisplayColorPicker(true);
  const handleChangeColor = (c: ColorResult) => setValue(c.hex);
  const handleCloseColor = () => {
    setDisplayColorPicker(false);
    dispatch(changeColorText(id, value));
  };

  useEffect(() => {
    setValue(colorText);
  }, [id]);

  return (
    <Wrapper>
      <StyledSet>
        <Title>Text Color</Title>
        <form onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="#fff"
            ref={inputRef}
            value={value}
            maxLength={7}
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
    </Wrapper>
  );
};

export default CustomColorText;
