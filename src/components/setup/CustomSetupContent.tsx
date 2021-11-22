import React, { useState } from 'react';
import styled from 'styled-components';

import { useCustomState, useCustomDispatch, useCustomCurrentId, useCustomSetCurrentId } from 'components/CustomContext';
import Menu from 'components/setup/CustomMenu';
import CustomColor from 'components/color';
import CustomSize from 'components/size';
import CustomShape from 'components/shape';
import CustomText from 'components/text';
import CustomResult from 'components/result';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  padding: 10px 25px;

  border: 1px solid #b0bec5;
  border-radius: 0 0 5px 5px;
  background: #fff;
`;

const CustomDeleteButton = styled.button`
  position: absolute;
  right: 25px;
  bottom: 25px;
  padding: 3px 20px;

  border-radius: 5px;
  background: #5844cf;
  color: #fff;

  &:disabled {
    display: none;
  }
`;

const CustomSetupContent = () => {
  const state = useCustomState();
  const id = useCustomCurrentId();
  const setId = useCustomSetCurrentId();
  const dispatch = useCustomDispatch();

  const [menu, setMenu] = useState('color');
  const handleChangeMenu = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as Element;
    setMenu(target.id);
  };

  const handleDelete = () => {
    const index = state.findIndex((custom) => custom.id === id);
    dispatch({ type: 'DELETE', id });
    if (index) {
      setId(state[0].id);
    } else {
      setId(state[1].id);
    }
  };

  return (
    <Wrapper>
      <Menu onClick={(e) => handleChangeMenu(e)} />
      {menu === 'color' && <CustomColor />}
      {menu === 'size' && <CustomSize />}
      {menu === 'shape' && <CustomShape />}
      {menu === 'text' && <CustomText />}
      {menu === 'result' && <CustomResult />}
      <CustomDeleteButton type="button" onClick={handleDelete} disabled={state.length === 1}>
        Delete
      </CustomDeleteButton>
    </Wrapper>
  );
};

export default CustomSetupContent;
