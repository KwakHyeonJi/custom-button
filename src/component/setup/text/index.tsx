import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'redux/modules';
import { changeText } from 'redux/modules/custom';
import useInputs from 'hook/useInputs';

const CustomText = () => {
  const customs = useSelector((state: RootState) => state.custom);
  const { id, text } = customs.find((custom) => custom.show);
  const dispatch = useDispatch();

  const [{ txt }, onChange, onSubmit, setValue] = useInputs({ txt: text });

  useEffect(() => {
    setValue('txt', text);
  }, [id]);

  return (
    <CustomTextWrapper>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="txt"
          value={txt}
          maxLength={20}
          onChange={onChange}
          onBlur={() => {
            dispatch(changeText(id, txt));
          }}
        />
      </form>
    </CustomTextWrapper>
  );
};

const CustomTextWrapper = styled.div`
  height: 33px;

  form {
    height: 100%;

    input {
      width: 300px;
      height: 100%;
      margin: 0 0.5rem;
      padding: 0 0.5rem;
      border: 1px solid #b0bec5;
      border-radius: 5px;
      color: #455a64;
      font-size: 1rem;
    }
  }
`;

export default CustomText;
