import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { changeSizeHeight } from 'store/modules/custom';
import OptionRange from 'components/OptionRange';
import Title from 'components/Title';

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
  sizeHeight: string;
}

const CustomSizeHeight = ({ id, sizeHeight }: Props) => {
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const [value, setValue] = useState(sizeHeight);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.type === 'range') {
      dispatch(changeSizeHeight(id, value));
    }
  };
  const handleBlur = () => dispatch(changeSizeHeight(id, value));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    inputRef.current.blur();
  };

  useEffect(() => {
    setValue(sizeHeight);
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
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </form>
        <StyledText>px</StyledText>
      </StyledSet>
      <OptionRange min="1" max="300" value={value} onChange={handleChange} />
    </Wrapper>
  );
};

export default memo(CustomSizeHeight);
