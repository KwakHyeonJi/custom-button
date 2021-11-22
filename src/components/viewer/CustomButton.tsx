import React from 'react';
import styled, { css } from 'styled-components';

import { Custom } from 'components/CustomContext';

type Setting = Partial<Custom>;

const StyledButton = styled.button<Setting>`
  ${(props) => {
    return css`
      overflow: hidden;
      width: ${props.sizeSetting.width}px;
      height: ${props.sizeSetting.height}px;
      border: ${props.colorSetting.border
        ? `${props.shapeSetting.borderWidth}px ${props.shapeSetting.borderStyle} ${props.colorSetting.border}`
        : 'none'};
      border-radius: ${props.shapeSetting.borderRadius}px;
      background: ${props.colorSetting.transparent ? 'transparent' : props.colorSetting.background};
      color: ${props.colorSetting.text};
      font-size: ${props.sizeSetting.text}px;
    `;
  }}
`;

const CustomButton = (props: Setting) => {
  const { colorSetting, sizeSetting, shapeSetting, textSetting } = props;
  return (
    <StyledButton
      type="button"
      colorSetting={colorSetting}
      sizeSetting={sizeSetting}
      shapeSetting={shapeSetting}
      textSetting={textSetting}
    >
      {textSetting}
    </StyledButton>
  );
};

export default CustomButton;
