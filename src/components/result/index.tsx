import { useCustomCurrentId, useCustomState } from 'components/CustomContext';
import React, { useEffect, useRef, useState } from 'react';
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
  const id = useCustomCurrentId();
  const state = useCustomState();
  const [setting, setSetting] = useState(state.find((custom) => custom.id === id));

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

  useEffect(() => setSetting(state.find((custom) => custom.id === id)), [id]);

  return (
    <Wrapper>
      <div ref={copyRef}>
        Overflow: hidden;
        <br />
        width: {setting.sizeSetting.width}px;
        <br />
        height: {setting.sizeSetting.height}px;
        <br />
        border:
        {setting.colorSetting.border
          ? `${setting.shapeSetting.borderWidth}px ${setting.shapeSetting.borderStyle} ${setting.colorSetting.border}`
          : 'none'}
        ;
        <br />
        border-radius: {setting.shapeSetting.borderRadius}px;
        <br />
        background: {setting.colorSetting.transparent ? 'transparent' : setting.colorSetting.background};
        <br />
        color: {setting.colorSetting.text};
        <br />
        font-size: {setting.sizeSetting.text}px;
      </div>
      <CopyButton type="button" onClick={handleCopyClipBoard}>
        {copyText}
      </CopyButton>
    </Wrapper>
  );
};

export default CustomResult;
