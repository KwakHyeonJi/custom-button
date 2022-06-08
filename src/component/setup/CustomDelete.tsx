import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'redux/modules';
import { remove, select } from 'redux/modules/custom';

const CustomDelete = () => {
  const customs = useSelector((state: RootState) => state.custom);
  const dispatch = useDispatch();

  const handleClick = () => {
    let index = 0;
    const { id } = customs.find((custom, i) => {
      index = i;
      return custom.show;
    });

    dispatch(remove(id));

    if (index) {
      dispatch(select(customs[0].id));
    } else {
      dispatch(select(customs[1].id));
    }
  };

  return (
    <CustomDeleteWrapper type="button" onClick={handleClick} disabled={customs.length === 1}>
      Delete
    </CustomDeleteWrapper>
  );
};

const CustomDeleteWrapper = styled.button`
  position: absolute;
  right: 1.4rem;
  bottom: 1.4rem;
  border-radius: 5px;
  background: #5844cf;
  color: #fff;

  &:disabled {
    display: none;
  }
`;

export default CustomDelete;
