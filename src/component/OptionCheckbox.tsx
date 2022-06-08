import React from 'react';
import { OptionWrapper } from 'component/Wrapper';

interface Props {
  name: string;
  checked: boolean;
  onChange: () => void;
}

const OptionCheckbox = React.memo(({ name, checked, onChange }: Props) => {
  return (
    <OptionWrapper>
      <input type="checkbox" id={name} checked={checked} onChange={onChange} />
      <label htmlFor={name}>
        <p>{name}</p>
      </label>
    </OptionWrapper>
  );
});

export default OptionCheckbox;
