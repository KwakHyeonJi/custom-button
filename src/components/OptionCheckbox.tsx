import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  margin-left: 25px;
  padding-left: 10px;
  font-size: 0.9rem;
  border-radius: 5px;
  background: #eef1f7;
`;

const StyledInput = styled.input`
  display: none;

  &:checked + label {
    border: none;
    background: #5844cf;
    font-weight: 500;
    color: #5844cf;
  }

  &:checked + label:before {
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
  }
`;

const StyledCheckbox = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid #b0bec5;
  border-radius: 5px;
  background: #fff;
  width: 23px;
  height: 23px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    width: 10px;
    height: 5px;
    transform: translate(-50%, -50%) rotate(-45deg);
    border-left: 2px solid #b0bec5;
    border-bottom: 2px solid #b0bec5;
  }
`;

const StyledText = styled.span`
  margin-left: 35px;
`;

interface Props {
  id: string;
  checked: boolean;
  onChange: () => void;
}

const OptionCheckbox = ({ id, checked, onChange }: Props) => {
  return (
    <Wrapper>
      <StyledInput type="checkbox" id={id} checked={checked} onChange={onChange} />
      <StyledCheckbox htmlFor={id}>
        <StyledText>{id}</StyledText>
      </StyledCheckbox>
    </Wrapper>
  );
};

export default OptionCheckbox;
