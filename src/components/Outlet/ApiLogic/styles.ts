import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const section = css`
  position: relative;
`;

export const img = (theme: Theme) => css`
  width: auto;
  height: auto;
  border-radius: 10px;
  border: 3px solid ${theme.palette.text.primary};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

export const wrap = (theme: Theme) => css`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 42px;
  text-align: center;
  ${theme.breakpoints.up('lg')} {
    width: 50%;
  }

  ${theme.breakpoints.down('lg')} {
    width: 80%;
  }
`;

export const title = (theme: Theme) => css`
  color: ${theme.palette.text.disabled};
`;
