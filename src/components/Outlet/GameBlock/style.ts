import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const wrap = (theme: Theme) => css`
  width: 70%;
  margin: 0 auto;
  ${theme.breakpoints.down('sm')} {
    width: 80%;
  }
`;

export const title = (theme: Theme) => css`
  color: ${theme.palette.text.primary};
  margin-bottom: 100px;
  ${theme.breakpoints.down('sm')} {
    margin-bottom: 40px;
  }
`;

export const section = css`
  padding-top: 10%;
  padding-bottom: 10%;
  position: relative;
  text-align: center;
`;

export const img = (theme: Theme) => css`
  margin: 40px auto 40px auto;
  border: 3px solid ${theme.palette.text.secondary};
`;
