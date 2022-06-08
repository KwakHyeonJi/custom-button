import React from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import styled from 'styled-components';

interface ColorPickerProps {
  hex: string;
  onClose: () => void;
  onChange: (c: ColorResult) => void;
  onChangeComplete: () => void;
}

interface SwatchProps {
  hex: string;
  onClick: () => void;
  disabled?: boolean;
}

const ColorPicker = ({ hex, onClose, onChange, onChangeComplete }: ColorPickerProps): JSX.Element => {
  return (
    <ColorPickerWrapper>
      <Block onClick={onClose} aria-hidden="true" />
      <ChromePicker color={hex} onChange={(c) => onChange(c)} onChangeComplete={onChangeComplete} />
    </ColorPickerWrapper>
  );
};

const Swatch = ({ onClick, hex, disabled }: SwatchProps): JSX.Element => {
  return (
    <SwatchWrapper type="button" onClick={onClick} disabled={disabled}>
      <SwatchColor hex={hex} />
    </SwatchWrapper>
  );
};

Swatch.defaultProps = {
  disabled: false,
};

const ColorPickerWrapper = styled.div`
  position: absolute;
  top: 10%;
  right: 30%;
  z-index: 2;
`;

const Block = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const SwatchWrapper = styled.button`
  width: 45px;
  height: 100%;
  padding: 0.25rem;
  border: 1px solid #b0bec5;
  border-radius: 5px;
  background: #fff;
`;

const SwatchColor = styled.div<{ hex: string }>`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: ${(props) => props.hex};
`;

export { ColorPicker, Swatch };
