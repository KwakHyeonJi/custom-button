import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { RootState } from 'redux/modules';
import { Custom } from 'redux/modules/custom';

const CustomButton = () => {
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
    text,
  } = customs.find((custom) => custom.show);

  return (
    <CustomButtonWrapper
      type="button"
      colorBackground={colorBackground}
      colorTransparent={colorTransparent}
      colorBorder={colorBorder}
      colorText={colorText}
      sizeWidth={sizeWidth}
      sizeHeight={sizeHeight}
      sizeText={sizeText}
      shapeBorderWidth={shapeBorderWidth}
      shapeBorderStyle={shapeBorderStyle}
      shapeBorderRadius={shapeBorderRadius}
    >
      {text}
    </CustomButtonWrapper>
  );
};

const CustomButtonWrapper = styled.button<Partial<Custom>>`
  ${(props) => {
    return css`
      width: ${props.sizeWidth}px;
      height: ${props.sizeHeight}px;
      border: ${props.colorBorder
        ? `${props.shapeBorderWidth}px ${props.shapeBorderStyle} ${props.colorBorder}`
        : 'none'};
      border-radius: ${props.shapeBorderRadius}px;
      background: ${props.colorTransparent ? 'transparent' : props.colorBackground};
      color: ${props.colorText};
      font-size: ${props.sizeText}px;
    `;
  }}
`;

export default CustomButton;
