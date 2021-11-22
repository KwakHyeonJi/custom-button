import React, { useState } from 'react';
import styled from 'styled-components';

import { useCustomState, useCustomCurrentId, useCustomSetCurrentId } from 'components/CustomContext';
import CustomTab from 'components/setup/CustomTab';
import CustomSetupContent from 'components/setup/CustomSetupContent';
import CustomCreate from 'components/setup/CustomCreate';

const CustomTabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CustomTabs = styled.div`
  display: flex;
  align-items: end;
  width: 85%;
  height: 50px;
`;

const CustomCreateButton = styled.button<{ active: boolean }>`
  padding: 0 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: ${(props) => (props.active ? '#5844cf' : '#90a4ae')};
  color: #fff;
  pointer-events: ${(props) => (props.active ? 'auto' : 'none')};
`;

const CustomSetup = () => {
  const state = useCustomState();
  const currentId = useCustomCurrentId();
  const setCurrentId = useCustomSetCurrentId();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (id: number) => setCurrentId(id);

  return (
    <>
      <CustomTabWrapper>
        <CustomTabs>
          {state.map((custom) => (
            <CustomTab
              key={custom.id}
              id={custom.id}
              name={custom.name}
              onChange={() => handleChange(custom.id)}
              checked={custom.id === currentId}
            />
          ))}
        </CustomTabs>
        <CustomCreateButton type="button" onClick={handleOpen} active={state.length < 8}>
          New Button
        </CustomCreateButton>
      </CustomTabWrapper>
      <CustomSetupContent />
      <CustomCreate open={open} onClose={handleClose} />
    </>
  );
};

export default CustomSetup;
