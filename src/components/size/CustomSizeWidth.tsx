import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'store/modules';
import { changeSizeWidth } from 'store/modules/custom';
import OptionRange from 'components/OptionRange';
import Title from 'components/Title';

const Wrapper = styled.div`
  display: flex;
  height: 33px;
  margin-top: 15px;
`;

const StyledSet = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  height: 100%;

  form {
    height: 100%;
  }
`;

const StyledInput = styled.input`
  width: 150px;
  height: 100%;
  padding: 5px 8px;

  border: 1px solid #b0bec5;
  border-radius: 5px;
  color: #455a64;
  font-size: 1rem;
`;

const StyledText = styled.span`
  margin-left: 5px;
`;

const CustomSizeWidth = () => {
  const customs = useSelector((state: RootState) => state.custom);
  const dispatch = useDispatch();
  const { id, sizeWidth } = customs.find((custom) => custom.show);

  const inputRef = useRef(null);

  const [value, setValue] = useState(sizeWidth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.type === 'range') {
      dispatch(changeSizeWidth(id, value));
    }
  };

  const handleBlur = () => dispatch(changeSizeWidth(id, value));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    inputRef.current.blur();
  };

  useEffect(() => {
    setValue(sizeWidth);
  }, [id]);

  return (
    <Wrapper>
      <StyledSet>
        <Title>Width</Title>
        <form onSubmit={handleSubmit}>
          <StyledInput
            type="number"
            min="1"
            max="800"
            ref={inputRef}
            value={value}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </form>
        <StyledText>px</StyledText>
      </StyledSet>
      <OptionRange min="1" max="800" value={value} onChange={handleChange} />
    </Wrapper>
  );
};

export default CustomSizeWidth;
