import React, { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 100%;
  margin: 0 0 10px 10px;
  padding-left: 10px;

  border-radius: 5px;
  background: #eef1f7;
  font-size: 0.9rem;
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

const StyledRadio = styled.label`
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
  margin-left: 30px;
`;

interface Props {
  item: string;
  name: string;
  checked: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptionRadio = ({ item, name, checked, onChange }: Props) => {
  return (
    <Wrapper>
      <StyledInput type="radio" id={item} name={name} checked={checked === item} onChange={onChange} />
      <StyledRadio htmlFor={item}>
        <StyledText>{item}</StyledText>
      </StyledRadio>
    </Wrapper>
  );
};

export default memo(OptionRadio);
