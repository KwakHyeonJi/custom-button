import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/modules';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: auto;
  height: 230px;
  font-size: 0.9rem;
  line-height: 1.5rem;

  & > div {
    user-select: text;
  }
`;

const CopyButton = styled.button`
  position: absolute;
  right: 125px;
  top: px;
  padding: 2px 20px;

  border: 1px solid #5844cf;
  border-radius: 5px;
  background: transparent;
  color: #5844cf;
`;

const CustomResult = () => {
  const customs = useSelector((state: RootState) => state.custom);
  const {
    colorBackground,
    colorTransparent,
    colorBorder,
    colorText,
    sizeWidth,
    sizeHeight,
    sizeText,
    shapeBorderWidth,
    shapeBorderStyle,
    shapeBorderRadius,
  } = customs.find((custom) => custom.show);

  const [copyText, setCopyText] = useState('Copy');
  const copyRef = useRef(null);
  const handleCopyClipBoard = async () => {
    navigator.clipboard
      .writeText(copyRef.current.innerText)
      .then(() => {
        setCopyText('Success');
        setTimeout(() => setCopyText('Copy'), 2000);
      })
      .catch(() => {
        setCopyText('Failure');
        setTimeout(() => setCopyText('Copy'), 2000);
      });
  };

  return (
    <Wrapper>
      <div ref={copyRef}>
        Overflow: hidden;
        <br />
        width: {sizeWidth}px;
        <br />
        height: {sizeHeight}px;
        <br />
        border:
        {colorBorder ? `${shapeBorderWidth}px ${shapeBorderStyle} ${colorBorder}` : 'none'}
        ;
        <br />
        border-radius: {shapeBorderRadius}px;
        <br />
        background: {colorTransparent ? 'transparent' : colorBackground};
        <br />
        color: {colorText};
        <br />
        font-size: {sizeText}px;
      </div>
      <CopyButton type="button" onClick={handleCopyClipBoard}>
        {copyText}
      </CopyButton>
    </Wrapper>
  );
};

export default CustomResult;
