import React from 'react';
import styled from 'styled-components';

import CustomButton from 'components/viewer/CustomButton';
import { useCustomState, useCustomCurrentId } from 'components/CustomContext';

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
  const state = useCustomState();
  const currentId = useCustomCurrentId();
  const setting = state.find((custom) => custom.id === currentId);
  return (
    <Wrapper>
      <CustomButton
        colorSetting={setting.colorSetting}
        sizeSetting={setting.sizeSetting}
        shapeSetting={setting.shapeSetting}
        textSetting={setting.textSetting}
      />
    </Wrapper>
  );
};

export default CustomViewer;
