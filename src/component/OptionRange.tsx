import React from 'react';
import styled from 'styled-components';

interface Props {
  min: number;
  max: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMouseUp: () => void;
}

const OptionRange = React.memo(({ min, max, value, onChange, onMouseUp }: Props) => {
  return (
    <OptionRangeWrapper>
      {min}
      <input type="range" min={min} max={max} value={value} onChange={onChange} onMouseUp={onMouseUp} />
      {max}
    </OptionRangeWrapper>
  );
});

const OptionRangeWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 0.5rem;
  padding: 0 1rem;
  border-radius: 5px;
  background: #eef1f7;
  font-size: 0.9rem;

  input {
    width: 100%;
    margin: 0 1rem;
    -webkit-appearance: none;
    cursor: pointer;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      margin-top: -8px;
      border-radius: 50%;
      background: #5844cf;
    }

    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      height: 4px;
      background: #cfd4de;
    }
  }
`;

export default OptionRange;
