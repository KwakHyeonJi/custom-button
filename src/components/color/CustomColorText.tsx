import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ColorResult } from 'react-color';

import { useCustomState, useCustomDispatch, useCustomCurrentId } from 'components/CustomContext';
import { ColorPicker, Swatch } from 'components/ColorPicker';

const Wrapper = styled.div`
  display: flex;
  height: 33px;
  margin-top: 15px;
`;

const Title = styled.span`
  margin-right: auto;
  font-size: 0.9rem;
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
  const id = useCustomCurrentId();
  const state = useCustomState();
  const dispatch = useCustomDispatch();
  const inputRef = useRef(null);

  const [input, setInput] = useState(state.find((custom) => custom.id === id).colorSetting.text);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  const handleBlur = () => dispatch({ type: 'CHANGE_COLOR_TEXT', id, color: input });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current.blur();
  };

  const handleOpenColor = () => setDisplayColorPicker(true);
  const handleChangeColor = (c: ColorResult) => setInput(c.hex);
  const handleCloseColor = () => {
    setDisplayColorPicker(false);
    dispatch({ type: 'CHANGE_COLOR_TEXT', id, color: input });
  };

  useEffect(() => {
    setInput(state.find((custom) => custom.id === id).colorSetting.text);
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
            value={input}
            maxLength={7}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </form>
        <Swatch onClick={handleOpenColor} hex={input} />
        {displayColorPicker && (
          <ColorPickerWrapper>
            <ColorPicker hex={input} onClose={handleCloseColor} onChange={handleChangeColor} />
          </ColorPickerWrapper>
        )}
      </StyledSet>
    </Wrapper>
  );
};

export default CustomColorText;
