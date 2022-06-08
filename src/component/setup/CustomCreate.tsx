import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { create } from 'redux/modules/custom';

interface Props {
  open: boolean;
  onClose: () => void;
}

const CustomCreate = ({ open, onClose }: Props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('Button');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(create(name));
    onClose();
  };

  return (
    <>
      <Block active={open} />
      <Modal active={open}>
        <CloseButton type="button" onClick={onClose} />
        <p>New Custom</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="name" maxLength={10} value={name} onChange={handleChange} required />
          <SubmitButton type="submit">OK</SubmitButton>
        </form>
      </Modal>
    </>
  );
};

const Block = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  opacity: ${({ active }) => (active ? 1 : 0)};
  pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
  transition: opacity 0.5s ease;
`;

const Modal = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 350px;
  height: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: #fff;
  opacity: ${({ active }) => (active ? 1 : 0)};
  pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
  transition: opacity 0.5s ease;

  p {
    font-size: 1rem;
    font-weight: 500;
  }

  form {
    width: 150px;

    input {
      width: 100%;
      margin-top: 2rem;
      border-bottom: 1px solid #b0bec5;
      font-size: 1rem;
    }
  }
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 1.2rem;
  border: none;
  border-radius: 50%;
  background: transparent;

  &:hover {
    background: #f5f6fa;
  }

  &:before {
    content: '';
    position: absolute;
    width: 2px;
    height: 20px;
    background: #b0bec5;
    transform: rotate(45deg);
  }

  &:after {
    content: '';
    position: absolute;
    width: 2px;
    height: 20px;
    background: #b0bec5;
    transform: rotate(-45deg);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.2rem 1rem;
  margin-top: 1rem;
  border-radius: 5px;
  background: #5844cf;
  color: #fff;
  font-size: 1rem;
`;

export default memo(CustomCreate);
