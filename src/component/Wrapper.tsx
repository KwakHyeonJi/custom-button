import styled from 'styled-components';

export const NameWrapper = styled.span`
  margin-right: auto;
  font-size: 0.9rem;
`;

export const ItemWrapper = styled.li`
  display: flex;
  height: 33px;
  margin-top: 1rem;

  form {
    height: 100%;

    input {
      width: 150px;
      height: 100%;
      margin: 0 0.5rem;
      padding: 0 0.5rem;
      border: 1px solid #b0bec5;
      border-radius: 5px;
      color: #455a64;
      font-size: 1rem;

      &:disabled {
        background: #eef1f7;
      }
    }
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    min-width: 40%;
    height: 100%;
    margin-right: 1rem;
  }
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 165px;
  height: 100%;
  margin-left: 0.5rem;
  padding: 0 0.5rem;
  background: #eef1f7;
  font-size: 0.9rem;
  border-radius: 5px;
  user-select: none;

  input {
    display: none;

    &:checked + label {
      border: none;
      background: #5844cf;
      color: #5844cf;
      font-weight: 500;
    }

    &:checked + label:before {
      border-left: 2px solid #fff;
      border-bottom: 2px solid #fff;
    }
  }

  label {
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid #b0bec5;
    border-radius: 5px;
    background: #fff;
    width: 23px;
    height: 23px;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      top: 40%;
      left: 50%;
      width: 10px;
      height: 5px;
      transform: translate(-50%, -50%) rotate(-45deg);
      border-left: 2px solid #b0bec5;
      border-bottom: 2px solid #b0bec5;
    }

    p {
      margin-left: 2rem;
    }
  }
`;
