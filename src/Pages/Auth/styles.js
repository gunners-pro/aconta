import styled from 'styled-components';

export const Back = styled.div`
  background: #f6f5f7;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;

  /* Animation */
  /* Move signin to the right */
  &.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }
  /* Move overlay to left */
  &.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }

  /* Bring sign up over sign in */
  &.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  }

  /* Move overlay back to right */
  &.right-panel-active .overlay {
    transform: translateX(50%);
  }

  &.right-panel-active .overlay-left {
    transform: translateX(0);
  }

  button:nth-of-type(1) {
    margin-top: 1rem;
  }

  button {
    height: 2.5rem;
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background: #ff4b2b;
    color: #fff;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0.75rem 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    transition: filter 80ms ease-in;
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }

  button:not(:disabled):active {
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }

  button:not(:disabled):hover {
    filter: brightness(85%);
  }

  button.ghost {
    background: transparent;
    border-color: #fff;
  }
`;

export const FormContainer = styled.section`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;

  &.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  &.sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  > form {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 3rem;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  > form > h1 {
    font-weight: bold;
  }

  > form > input {
    background: #eee;
    border: none;
    padding: 0.75rem 1rem;
    margin: 0.5rem 0;
    width: 100%;
  }

  a {
    text-decoration: none;
    margin: 1rem 0 0;
    color: #0b0b0e;
  }
`;

export const OverlayContainer = styled.section`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;

  & > .overlay {
    background: #be2a32;
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  & > .overlay > .overlay-panel {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2.5rem;
    height: 100%;
    width: 50%;
    text-align: center;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  & > .overlay > .overlay-right {
    right: 0;
    transform: translateX(0);
  }

  & > .overlay > .overlay-left {
    transform: translateX(0);
  }

  p {
    margin: 1rem 0;
  }
`;
