import React from 'react';
import styled from 'styled-components';

interface Props {
  id: number;
  name: string;
  checked: boolean;
  onChange: () => void;
}

const CustomTab = ({ id, name, checked, onChange }: Props) => {
  return (
    <CustomTabWrapper>
      <input type="radio" id={`tab${id}`} name="custom_tab" checked={checked} onChange={onChange} />
      <label htmlFor={`tab${id}`}>
        <p>{name}</p>
      </label>
    </CustomTabWrapper>
  );
};

const CustomTabWrapper = styled.div`
  input {
    display: none;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    margin-right: 0.5rem;
    margin-top: 10px;
    padding: 0 1rem;

    border: 1px solid #b0bec5;
    border-bottom: none;
    border-radius: 5px 5px 0 0;
    background: #fff;
    color: #b0bec5;

    cursor: pointer;

    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  input:checked + label {
    height: 50px;
    color: #5844cf;
    margin-top: 0;
  }
`;

export default CustomTab;
