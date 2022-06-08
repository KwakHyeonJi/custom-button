import React from 'react';
import styled from 'styled-components';

import CustomButton from 'component/viewer/CustomButton';

const CustomViewer = () => {
  return (
    <CustomViewerWrapper>
      <CustomButton />
    </CustomViewerWrapper>
  );
};

const CustomViewerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 500px;
  margin-top: 70px;
  border: 1px solid #b0bec5;
  border-radius: 5px;
  background: #fff;
`;

export default CustomViewer;
