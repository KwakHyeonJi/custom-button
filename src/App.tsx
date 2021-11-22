import React from 'react';
import styled from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import { CustomProvider } from 'components/CustomContext';
import CustomSetup from 'components/setup/CustomSetup';
import CustomViewer from 'components/viewer';

const Wrapper = styled.div`
  width: 1000px;
  height: 600px;
  margin: 200px auto;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <CustomProvider>
          <CustomSetup />
          <CustomViewer />
        </CustomProvider>
      </Wrapper>
    </>
  );
};

export default App;
