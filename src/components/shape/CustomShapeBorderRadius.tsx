import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { changeShapeBorderRadius } from 'store/modules/custom';
import Title from 'components/Title';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  margin-top: 90px;
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

interface Props {
  id: number;
  shapeBorderRadius: string;
}

const CustomShapeBorderRadius = ({ id, shapeBorderRadius }: Props) => {
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const [value, setValue] = useState(shapeBorderRadius);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleBlur = () => dispatch(changeShapeBorderRadius(id, value));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    inputRef.current.blur();
  };

  useEffect(() => {
    setValue(shapeBorderRadius);
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
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </form>
        <StyledText>px</StyledText>
      </StyledSet>
    </Wrapper>
  );
};

export default memo(CustomShapeBorderRadius);
