import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { BorderStyle, changeShapeBorderStyle, changeShapeBorderWidth } from 'store/modules/custom';
import OptionRadio from 'components/OptionRadio';
import Title from 'components/Title';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
  width: 100px;
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

const OptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 70%;
`;

interface Props {
  id: number;
  shapeBorderWidth: string;
  shapeBorderStyle: BorderStyle;
}

const CustomShapeBorder = ({ id, shapeBorderWidth, shapeBorderStyle }: Props) => {
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const [value, setValue] = useState(shapeBorderWidth);
  const [style, setStyle] = useState(shapeBorderStyle);

  const styles: BorderStyle[] = ['Solid', 'Dotted', 'Dashed', 'Double', 'Groove', 'Ridge', 'Inset', 'Outset'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleBlur = () => dispatch(changeShapeBorderWidth(id, value));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    inputRef.current.blur();
  };

  const handleChangeStyle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as Element;
    const targetId = target.id as BorderStyle;
    setStyle(targetId);
    dispatch(changeShapeBorderStyle(id, targetId));
  }, []);

  useEffect(() => {
    setValue(shapeBorderWidth);
    setStyle(shapeBorderStyle);
  }, [id]);

  return (
    <Wrapper>
      <StyledSet>
        <Title>Border Style</Title>
        <form onSubmit={handleSubmit}>
          <StyledInput
            type="number"
            min="1"
            max="80"
            ref={inputRef}
            value={value}
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}
          />
        </form>
        <StyledText>px</StyledText>
      </StyledSet>
      <OptionWrapper>
        {styles.map((item) => (
          <OptionRadio key={item} item={item} name="border_style" checked={style} onChange={handleChangeStyle} />
        ))}
      </OptionWrapper>
    </Wrapper>
  );
};

export default memo(CustomShapeBorder);
