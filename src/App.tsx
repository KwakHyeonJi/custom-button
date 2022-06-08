import React from 'react';

import GlobalStyle from 'styles/GlobalStyle';
import CustomSetup from 'component/setup';
import CustomViewer from 'component/viewer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <CustomSetup />
      <CustomViewer />
    </>
  );
};

export default App;
