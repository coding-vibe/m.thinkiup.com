import { css, keyframes } from '@emotion/react';

const flicker = keyframes`
  0%, 100% {
    background-color: #fff;
    color: #000b85;
    border-color: #000b85;
  }
  50% {
    background-color: #000b85;
    color: #fff;
    border-color: #fff;
  }
`;

const spreadBlueBackground = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 0.7;
    transform: scale(10);
  }
`;

export const btn1 = css`
  position: relative;
  z-index: 1;
  width: 100%;
  a {
    width: 90%;
  }
  & .MuiButtonBase-root {
    padding: 20px 30px;
    background: #fff;
    color: #000b85;
    border-radius: 5px;
    border: 2px solid #000b85;
    box-sizing: border-box;
    z-index: 2;
    animation: ${flicker} 1s infinite;
  }

  &::before {
    content: '';
    position: fixed;
    bottom: 20px;
    left: 95px;
    width: 50px;
    height: 50px;
    background-color: rebeccapurple;
    border-radius: 50%;
    transform: translate(-30%, -30%) scale(0);
    transform-origin: center;
    opacity: 0;
    z-index: -1;
    pointer-events: none;
    animation: ${spreadBlueBackground} 1s infinite;
  }
`;

export const btnWrap = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const btn2 = css`
  & .MuiButtonBase-root {
    padding: 20px 30px;
    background: green;
    color: #fff;
    border-radius: 5px;
    border: none;
    width: 100%;
  }
`;
