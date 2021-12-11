import React, { useState } from 'react';
import styled from 'styled-components';

import Menu from 'components/setup/CustomMenu';
import CustomDelete from 'components/setup/CustomDelete';
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

const CustomSetupContent = () => {
  const [menu, setMenu] = useState('color');
  const handleChangeMenu = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as Element;
    setMenu(target.id);
  };

  return (
    <Wrapper>
      <Menu onClick={(e) => handleChangeMenu(e)} />
      {menu === 'color' && <CustomColor />}
      {menu === 'size' && <CustomSize />}
      {menu === 'shape' && <CustomShape />}
      {menu === 'text' && <CustomText />}
      {menu === 'result' && <CustomResult />}
      <CustomDelete />
    </Wrapper>
  );
};

export default CustomSetupContent;
