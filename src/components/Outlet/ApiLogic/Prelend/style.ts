import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const hero = (theme: Theme) => css`
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: 100vh;
  overflow: hidden;
  ${theme.breakpoints.down('md')} {
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: auto;

    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export const bg = (theme: Theme) => css`
  z-index: -1;
  object-fit: cover;
  filter:brightness(20%);
  ${theme.breakpoints.down('md')} {
    filter: unset;
    height: auto !important;
    position: static !important;
  }
`;

export const body = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 100%;

  ${theme.breakpoints.down('md')} {
    align-items: center;
    height: auto;
  }
`;

export const content = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 1vw;
  position: relative;
  z-index: 200;
  padding: 2vw;
  border-radius: 2vw;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 1440px) {
    margin-bottom: 5%;
  }
  ${theme.breakpoints.down('md')} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 50vh;
  }
  h1 {
    font-weight: 700;
    font-size: 4vw;
    color: #fff;
    line-height: 100%;
    text-align: center;
    max-width: 50vw;
    @media (max-width: 1440px) {
      font-size: 48px;
    }
    ${theme.breakpoints.down('md')} {
      font-size: 40px;
    }
    ${theme.breakpoints.down('xs')} {
      font-size: 30px;
    }
    span {
      color: ${theme.palette.text.primary};
    }
  }
  h6 {
    font-weight: 600;
    font-size: 2vw;
    color: #fff;
    line-height: 120%;
    text-align: center;
    max-width: 50vw;

    ${theme.breakpoints.down('md')} {
      font-size: 30px;
    }
    ${theme.breakpoints.down('xs')} {
      font-size: 20px;
    }
    span {
      color: ${theme.palette.text.primary};
    }
  }
`;

export const btns = (theme: Theme) => css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2vw;
  a {
    @keyframes flyUpDown {
      0% {
        transform: translateY(-10px); /* Смещаем немного вверх */
      }
      50% {
        transform: translateY(10px); /* Смещаем немного вниз */
      }
      100% {
        transform: translateY(-10px); /* Возвращаем в исходное положение */
      }
    }
    animation: flyUpDown 3s ease-in-out infinite;
    font-size: 2vw;
    width: 30vw;
    max-width: unset;
    padding: 2vw 3vw;
    font-weight: 700;
    @media (max-width: 1440px) {
      font-size: 30px;
    }
    @media (max-width: 991px) {
      padding: 30px 50px;
      font-size: 24px;
      width: 100%;
    }
    ${theme.breakpoints.down('sm')} {
      font-size: 24px;
      width: 100%;
      margin-top: unset;
      padding: 30px 30px;
    }
  }
`;
