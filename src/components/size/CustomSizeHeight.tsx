import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useCustomState, useCustomDispatch, useCustomCurrentId } from 'components/CustomContext';
import OptionRange from 'components/OptionRange';

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
  width: 30%;
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

const StyledText = styled.span`
  margin-left: 5px;
`;

const CustomSizeHeight = () => {
  const id = useCustomCurrentId();
  const state = useCustomState();
  const dispatch = useCustomDispatch();
  const inputRef = useRef(null);

  const [input, setInput] = useState(state.find((custom) => custom.id === id).sizeSetting.height);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (e.target.type === 'range') {
      dispatch({ type: 'CHANGE_SIZE_HEIGHT', id, size: input });
    }
  };
  const handleBlur = () => dispatch({ type: 'CHANGE_SIZE_HEIGHT', id, size: input });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current.blur();
  };

  useEffect(() => {
    setInput(state.find((custom) => custom.id === id).sizeSetting.height);
  }, [id]);

  return (
    <Wrapper>
      <StyledSet>
        <Title>Height</Title>
        <form onSubmit={handleSubmit}>
          <StyledInput
            type="number"
            min="1"
            max="300"
            ref={inputRef}
            value={input}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </form>
        <StyledText>px</StyledText>
      </StyledSet>
      <OptionRange min="1" max="300" value={input} onChange={handleChange} />
    </Wrapper>
  );
};

export default CustomSizeHeight;
