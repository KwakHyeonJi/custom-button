import React from 'react';
import styled from 'styled-components';

import CustomButton from 'components/viewer/CustomButton';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;

  border: 1px solid #b0bec5;
  border-radius: 5px;
  background: #fff;

  margin-top: 50px;
`;

const CustomViewer = () => {
  return (
    <Wrapper>
      <CustomButton />
    </Wrapper>
  );
};

export default CustomViewer;
