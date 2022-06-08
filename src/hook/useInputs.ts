import React, { useState, useCallback } from 'react';

const useInputs = <T>(
  initialInputs: T,
): [
  T,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.FormEvent<HTMLFormElement>) => void,
  <T>(name: string, value: T) => void,
] => {
  const [inputs, setInputs] = useState(initialInputs);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }, []);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (document.activeElement as HTMLElement).blur();
  }, []);

  const setValue = useCallback(<T>(name: string, value: T) => {
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }, []);

  return [inputs, onChange, onSubmit, setValue];
};

export default useInputs;
