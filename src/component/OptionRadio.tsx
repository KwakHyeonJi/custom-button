import React from 'react';
import { OptionWrapper } from 'component/Wrapper';

interface Props {
  id: string;
  name: string;
  checked: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptionRadio = React.memo(({ id, name, checked, onChange }: Props) => {
  return (
    <OptionWrapper>
      <input type="radio" id={id} name={name} checked={checked === id} onChange={onChange} />
      <label htmlFor={id}>
        <p>{id}</p>
      </label>
    </OptionWrapper>
  );
});

export default OptionRadio;
