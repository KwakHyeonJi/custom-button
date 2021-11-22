import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useCustomState, useCustomDispatch, useCustomCurrentId } from 'components/CustomContext';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  font-size: 0.9rem;
  margin-right: 15px;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 33px;
  padding: 5px 8px;

  border: 1px solid #b0bec5;
  border-radius: 5px;
  color: #455a64;
  font-size: 1rem;
`;

const CustomText = () => {
  const id = useCustomCurrentId();
  const state = useCustomState();
  const dispatch = useCustomDispatch();

  const [input, setInput] = useState(state.find((custom) => custom.id === id).textSetting);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  const handleBlur = () => dispatch({ type: 'CHANGE_TEXT', id, text: input });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'CHANGE_TEXT', id, text: input });
  };

  useEffect(() => {
    setInput(state.find((custom) => custom.id === id).textSetting);
  }, [id]);

  return (
    <Wrapper>
      <Title>Text</Title>
      <form onSubmit={handleSubmit}>
        <StyledInput type="text" value={input} onBlur={handleBlur} onChange={handleChange} maxLength={50} />
      </form>
    </Wrapper>
  );
};

export default CustomText;
