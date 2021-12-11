import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'store/modules';
import { select } from 'store/modules/custom';
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
  const customs = useSelector((state: RootState) => state.custom);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelect = (id: number) => {
    dispatch(select(id));
  };

  return (
    <>
      <CustomTabWrapper>
        <CustomTabs>
          {customs.map((custom) => (
            <CustomTab
              key={custom.id}
              id={custom.id}
              name={custom.name}
              onChange={() => handleSelect(custom.id)}
              checked={custom.show}
            />
          ))}
        </CustomTabs>
        <CustomCreateButton type="button" onClick={handleOpen} active={customs.length < 8}>
          New Button
        </CustomCreateButton>
      </CustomTabWrapper>
      <CustomSetupContent />
      <CustomCreate open={open} onClose={handleClose} />
    </>
  );
};

export default CustomSetup;
