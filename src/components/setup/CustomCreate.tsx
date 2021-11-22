import { useCustomDispatch, useCustomSetCurrentId } from 'components/CustomContext';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Block = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: opacity 0.5s ease;

  opacity: ${(props) => (props.active ? 1 : 0)};
  pointer-events: ${(props) => (props.active ? 'auto' : 'none')};
`;

const Modal = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 450px;
  height: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: #fff;
  transition: opacity 0.5s ease;

  opacity: ${(props) => (props.active ? 1 : 0)};
  pointer-events: ${(props) => (props.active ? 'auto' : 'none')};

  form {
    width: 250px;
  }
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;

  &: hover {
    background: #f5f6fa;
  }

  span {
    position: absolute;
    width: 2px;
    height: 25px;
    background: #b0bec5;
  }

  span:nth-child(1) {
    transform: rotate(45deg);
  }

  span:nth-child(2) {
    transform: rotate(-45deg);
  }
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 60px;
`;

const CustomName = styled.input`
  width: 100%;
  border-bottom: 1px solid #b0bec5;
  font-size: 1.2rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 3px 0;
  margin-top: 30px;

  border-radius: 5px;
  background: #5844cf;
  color: #fff;
  font-size: 1rem;
`;

interface Props {
  open: boolean;
  onClose: () => void;
}

const CustomCreate = ({ open, onClose }: Props) => {
  const nextId = useRef(2);
  const dispatch = useCustomDispatch();
  const setCurrentId = useCustomSetCurrentId();

  const [name, setName] = useState('Button');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'CREATE', id: nextId.current, name });
    setCurrentId(nextId.current);
    nextId.current += 1;
    onClose();
  };

  return (
    <>
      <Block active={open} />
      <Modal active={open}>
        <CloseButton type="button" onClick={onClose}>
          <span />
          <span />
        </CloseButton>
        <Title>New Custom</Title>
        <form onSubmit={handleSubmit}>
          <CustomName type="text" placeholder="name" maxLength={10} value={name} onChange={handleChange} required />
          <SubmitButton type="submit">OK</SubmitButton>
        </form>
      </Modal>
    </>
  );
};

export default CustomCreate;
