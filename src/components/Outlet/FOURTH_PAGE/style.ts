import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const imageWrap = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 16px;
  padding: 16px;
  align-items: center;
  justify-items: center;
  ${theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }
`;

export const img = (theme: Theme) => css`
  width: 438px;
  height: 375px;
  border-radius: 10px;
  ${theme.breakpoints.down('sm')} {
    width: 360;
    height: 260;
  }
`;
