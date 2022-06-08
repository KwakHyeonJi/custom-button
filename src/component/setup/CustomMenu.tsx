import React from 'react';
import styled from 'styled-components';

interface MenusProps {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const Menu = ({ onClick }: MenusProps): JSX.Element => {
  return (
    <MenuWrapper>
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
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  padding: 0.6rem 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid #cfd8dc;
  color: #90a4ae;

  input {
    display: none;
  }

  label {
    padding: 0.6rem 0;
    cursor: pointer;
  }
  label ~ label {
    margin-left: 1.6rem;
  }

  input:checked + label {
    border-bottom: 2px solid #5844cf;
    color: #5844cf;
  }
`;

export default Menu;
