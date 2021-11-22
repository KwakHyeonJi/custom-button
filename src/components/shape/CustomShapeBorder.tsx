import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useCustomState, useCustomDispatch, useCustomCurrentId } from 'components/CustomContext';
import OptionRadio from 'components/OptionRadio';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
  width: 30%;
  height: 100%;

  form {
    height: 100%;
  }
`;

const StyledInput = styled.input`
  width: 100px;
  height: 100%;
  padding: 5px 8px;

  border: 1px solid #b0bec5;
  border-radius: 5px;
  color: #455a64;
  font-size: 1rem;
`;

const StyledText = styled.span`
  margin-left: 5px;
`;

const CustomShapeBorder = () => {
  const id = useCustomCurrentId();
  const state = useCustomState();
  const dispatch = useCustomDispatch();
  const inputRef = useRef(null);

  const currentSetting = state.find((custom) => custom.id === id).shapeSetting;
  const [input, setInput] = useState(currentSetting.borderWidth);
  const [style, setStyle] = useState(currentSetting.borderStyle);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  const handleBlur = () => dispatch({ type: 'CHANGE_SHAPE_BORDER_WIDTH', id, size: input });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current.blur();
  };

  const handleChangeStyle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as Element;
    setStyle(target.id);
    dispatch({ type: 'CHANGE_SHAPE_BORDER_STYLE', id, style: target.id });
  };

  useEffect(() => {
    const currentSetting = state.find((custom) => custom.id === id).shapeSetting;
    setInput(currentSetting.borderWidth);
    setStyle(currentSetting.borderStyle);
  }, [id]);

  return (
    <Wrapper>
      <StyledSet>
        <Title>Border Style</Title>
        <form onSubmit={handleSubmit}>
          <StyledInput
            type="number"
            min="1"
            max="80"
            ref={inputRef}
            value={input}
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}
          />
        </form>
        <StyledText>px</StyledText>
      </StyledSet>
      <OptionRadio
        items={['Solid', 'Dotted', 'Dashed', 'Double', 'Groove', 'Ridge', 'Inset', 'Outset']}
        name="border_style"
        checked={style}
        onChange={handleChangeStyle}
      />
    </Wrapper>
  );
};

export default CustomShapeBorder;
