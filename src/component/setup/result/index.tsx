import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'redux/modules';

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

  const [copyMsg, setCopyMsg] = useState('Copy');
  const copyRef = useRef(null);

  const handleCopy = async () => {
    navigator.clipboard
      .writeText(copyRef.current.innerText)
      .then(() => {
        setCopyMsg('Copied');
        setTimeout(() => setCopyMsg('Copy'), 2000);
      })
      .catch(() => {
        setCopyMsg('Failure');
        setTimeout(() => setCopyMsg('Copy'), 2000);
      });
  };

  return (
    <CustomResultWrapper>
      <div ref={copyRef}>
        width: {sizeWidth}px;
        <br />
        height: {sizeHeight}px;
        <br />
        border:
        {colorBorder ? ` ${shapeBorderWidth}px ${shapeBorderStyle} ${colorBorder}` : ' none'}
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
      <CopyButton type="button" onClick={handleCopy} disabled={copyMsg !== 'Copy'}>
        {copyMsg}
      </CopyButton>
    </CustomResultWrapper>
  );
};

const CustomResultWrapper = styled.div`
  position: relative;
  width: 500px;
  padding: 0.5rem 1rem;
  background: #eef1f7;
  line-height: 1.8;
  font-size: 0.9rem;
`;

const CopyButton = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  padding: 0;
  border: none;
  background: transparent;
  color: #5844cf;

  &:hover {
    border-bottom: 1px solid #5844cf;
  }

  &:disabled {
    border: none;
    cursor: auto;
  }
`;

export default CustomResult;
