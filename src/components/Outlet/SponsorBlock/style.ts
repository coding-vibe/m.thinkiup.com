import { css, keyframes } from '@emotion/react';
import { Theme } from '@mui/material';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const logoWrap = (theme: Theme) => css`
  padding: 80px 0;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  align-items: center;
  ${theme.breakpoints.down('md')}{
    padding: 30px;
  }
`;

export const scrollContainer = css`
  display: flex;
  align-items: center;
  animation: ${scroll} 30s linear infinite;
`;

export const logo = (theme: Theme) => css`
  margin-right: 100px;
  width: 200px;
  height: 90px;
  ${theme.breakpoints.down('md')}{
    width: 140px;
    height: 95px;
    margin-right: 40px;
  }
`;
