import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #cfd8dc;
  color: #90a4ae;

  input {
    display: none;
  }

  label {
    padding-bottom: 10px;
    margin-right: 30px;
    cursor: pointer;
  }

  input:checked + label {
    color: #5844cf;
    border-bottom: 2px solid #5844cf;
  }
`;

interface MenusProps {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const Menu = ({ onClick }: MenusProps): JSX.Element => {
  return (
    <Wrapper>
      <input type="radio" id="color" name="menu_item" onClick={onClick} defaultChecked />
      <label htmlFor="color">Color</label>
      <input type="radio" id="size" name="menu_item" onClick={onClick} />
      <label htmlFor="size">Size</label>
      <input type="radio" id="shape" name="menu_item" onClick={onClick} />
      <label htmlFor="shape">Shape</label>
      <input type="radio" id="text" name="menu_item" onClick={onClick} />
      <label htmlFor="text">Text</label>
      <input type="radio" id="result" name="menu_item" onClick={onClick} />
      <label htmlFor="result">CSS</label>
    </Wrapper>
  );
};

export default Menu;
