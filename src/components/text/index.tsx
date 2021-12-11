import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/modules';
import { changeText } from 'store/modules/custom';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  font-size: 0.9rem;
  margin-right: 15px;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 33px;
  padding: 5px 8px;

  border: 1px solid #b0bec5;
  border-radius: 5px;
  color: #455a64;
  font-size: 1rem;
`;

const CustomText = () => {
  const customs = useSelector((state: RootState) => state.custom);
  const dispatch = useDispatch();
  const { id, text } = customs.find((custom) => custom.show);

  const [value, setValue] = useState(text);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleBlur = () => dispatch(changeText(id, value));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(changeText(id, value));
  };

  useEffect(() => {
    setValue(text);
  }, [id]);

  return (
    <Wrapper>
      <Title>Text</Title>
      <form onSubmit={handleSubmit}>
        <StyledInput type="text" value={value} onBlur={handleBlur} onChange={handleChange} maxLength={50} />
      </form>
    </Wrapper>
  );
};

export default CustomText;
