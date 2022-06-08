import React, { useState } from 'react';
import styled from 'styled-components';

import CustomMenu from 'component/setup/CustomMenu';
import CustomDelete from 'component/setup/CustomDelete';
import CustomColor from 'component/setup/color';
import CustomSize from 'component/setup/size';
import CustomShape from 'component/setup/shape';
import CustomText from 'component/setup/text';
import CustomResult from 'component/setup/result';

const CustomContent = () => {
  const [menu, setMenu] = useState('color');
  const handleMenuChange = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as Element;
    setMenu(target.id);
  };

  const Content = () => {
    switch (menu) {
      case 'color':
        return <CustomColor />;
      case 'size':
        return <CustomSize />;
      case 'shape':
        return <CustomShape />;
      case 'text':
        return <CustomText />;
      case 'result':
        return <CustomResult />;
      default:
        return <p>NO CONTENT</p>;
    }
  };

  return (
    <CustomContentWrapper>
      <CustomMenu
        onClick={(e) => {
          handleMenuChange(e);
        }}
      />
      <Content />
      <CustomDelete />
    </CustomContentWrapper>
  );
};

const CustomContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 1.4rem;
  border: 1px solid #b0bec5;
  border-radius: 0 0 5px 5px;
  background: #fff;
`;

export default CustomContent;
