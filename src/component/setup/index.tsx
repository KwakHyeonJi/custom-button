import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'redux/modules';
import { select } from 'redux/modules/custom';
import CustomTab from 'component/setup/CustomTab';
import CustomContent from 'component/setup/CustomContent';
import CustomCreate from 'component/setup/CustomCreate';

const CustomSetup = () => {
  const customs = useSelector((state: RootState) => state.custom);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = useCallback(() => setOpen(false), []);

  const handleSelect = (id: number) => {
    dispatch(select(id));
  };

  return (
    <CustomSetupWrapper>
      <CustomTabsWrapper>
        {customs.map((custom) => (
          <CustomTab
            key={custom.id}
            id={custom.id}
            name={custom.name}
            onChange={() => {
              handleSelect(custom.id);
            }}
            checked={custom.show}
          />
        ))}
        <CustomCreateButton type="button" onClick={handleOpen} disabled={customs.length > 4}>
          New Button
        </CustomCreateButton>
      </CustomTabsWrapper>
      <CustomContent />
      <CustomCreate open={open} onClose={handleClose} />
    </CustomSetupWrapper>
  );
};

const CustomSetupWrapper = styled.div`
  position: relative;
  width: 1000px;
  height: 300px;
`;

const CustomTabsWrapper = styled.div`
  display: flex;
  width: 85%;
`;

const CustomCreateButton = styled.button`
  position: absolute;
  right: 0;
  border: none;
  border-radius: 5px;
  background: #5844cf;
  color: #fff;

  &:disabled {
    background: #90a4ae;
    cursor: auto;
  }
`;

export default CustomSetup;
