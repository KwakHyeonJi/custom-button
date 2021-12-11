import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import Title from 'components/Title';
import { changeSizeText } from 'store/modules/custom';

const Wrapper = styled.div`
  display: flex;
  height: 33px;
  margin-top: 15px;
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

interface Props {
  id: number;
  sizeText: string;
}

const CustomSizeText = ({ id, sizeText }: Props) => {
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const [value, setValue] = useState(sizeText);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.type === 'range') {
      dispatch(changeSizeText(id, value));
    }
  };
  const handleBlur = () => dispatch(changeSizeText(id, value));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    inputRef.current.blur();
  };

  useEffect(() => {
    setValue(sizeText);
  }, [id]);

  return (
    <Wrapper>
      <StyledSet>
        <Title>Text</Title>
        <form onSubmit={handleSubmit}>
          <StyledInput
            type="number"
            min="10"
            max="200"
            ref={inputRef}
            value={value}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </form>
        <StyledText>px</StyledText>
      </StyledSet>
    </Wrapper>
  );
};

export default memo(CustomSizeText);
