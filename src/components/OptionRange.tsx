import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  right: 0;
  width: 67%;
  margin-left: 3%;
  padding: 0 20px;
  border-radius: 5px;
  background: #eef1f7;
  font-size: 0.9rem;
`;

const StyledInput = styled.input`
  width: 100%;
  margin: 0 20px;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    margin-top: -8px;
    border-radius: 50%;
    background: #5844cf;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 4px;
    background: #cfd4de;
  }
`;

interface Props {
  min: string;
  max: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptionRange = ({ min, max, value, onChange }: Props) => {
  return (
    <Wrapper>
      {min}
      <StyledInput type="range" min={min} max={max} value={value} onChange={onChange} />
      {max}
    </Wrapper>
  );
};

export default OptionRange;
