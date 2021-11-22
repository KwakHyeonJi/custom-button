import React from 'react';
import styled from 'styled-components';
import { SketchPicker, ColorResult } from 'react-color';

const Block = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledButton = styled.button`
  width: 45px;
  height: 100%;
  padding: 5px;
  border: 1px solid #b0bec5;
  border-radius: 5px;
  background: #fff;
  margin-left: 10px;
`;

const SwatchColor = styled.div<{ hex: string }>`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: ${(props) => props.hex};
`;

interface ColorPickerProps {
  hex: string;
  onClose: () => void;
  onChange: (c: ColorResult) => void;
}

interface SwatchProps {
  hex: string;
  onClick: () => void;
}

const ColorPicker = ({ hex, onClose, onChange }: ColorPickerProps): JSX.Element => {
  return (
    <>
      <Block onClick={onClose} aria-hidden="true" />
      <SketchPicker disableAlpha color={hex} onChange={(c) => onChange(c)} />
    </>
  );
};

const Swatch = ({ onClick, hex }: SwatchProps): JSX.Element => {
  return (
    <StyledButton type="button" onClick={onClick}>
      <SwatchColor hex={hex} />
    </StyledButton>
  );
};

export { ColorPicker, Swatch };
