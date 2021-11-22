import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: none;
`;

const StyledTab = styled.label`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  padding: 0 25px;
  margin-right: 5px;

  border: 1px solid #b0bec5;
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  background: #fff;
  color: #b0bec5;

  cursor: pointer;

  input:checked + & {
    height: 100%;
    color: #5844cf;
  }

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

interface Props {
  id: number;
  name: string;
  checked: boolean;
  onChange: () => void;
}

const CustomTab = ({ id, name, checked, onChange }: Props) => {
  return (
    <>
      <StyledInput type="radio" id={`tab${id}`} name="custom_tab" checked={checked} onChange={onChange} />
      <StyledTab htmlFor={`tab${id}`}>
        <span>{name}</span>
      </StyledTab>
    </>
  );
};

export default CustomTab;
