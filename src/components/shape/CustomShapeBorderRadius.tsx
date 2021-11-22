import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useCustomState, useCustomDispatch, useCustomCurrentId } from 'components/CustomContext';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  margin-top: 90px;
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

const CustomShapeBorderRadius = () => {
  const id = useCustomCurrentId();
  const state = useCustomState();
  const dispatch = useCustomDispatch();
  const inputRef = useRef(null);

  const [input, setInput] = useState(state.find((custom) => custom.id === id).shapeSetting.borderRadius);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  const handleBlur = () => dispatch({ type: 'CHANGE_SHAPE_BORDER_RADIUS', id, size: input });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current.blur();
  };

  useEffect(() => {
    setInput(state.find((custom) => custom.id === id).shapeSetting.borderRadius);
  }, [id]);

  return (
    <Wrapper>
      <StyledSet>
        <Title>Border Radius</Title>
        <form onSubmit={handleSubmit}>
          <StyledInput
            type="number"
            min="1"
            max="1000"
            ref={inputRef}
            value={input}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </form>
        <StyledText>px</StyledText>
      </StyledSet>
    </Wrapper>
  );
};

export default CustomShapeBorderRadius;
