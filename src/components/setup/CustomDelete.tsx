import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'store/modules';
import { remove, select } from 'store/modules/custom';

const Wrapper = styled.button`
  position: absolute;
  right: 25px;
  bottom: 25px;
  padding: 3px 20px;

  border-radius: 5px;
  background: #5844cf;
  color: #fff;

  &:disabled {
    display: none;
  }
`;

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
    <Wrapper type="button" onClick={handleClick} disabled={customs.length === 1}>
      Delete
    </Wrapper>
  );
};

export default CustomDelete;
