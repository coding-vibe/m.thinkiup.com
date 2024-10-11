import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const wrap = (theme: Theme) => css`
  background: linear-gradient(180deg, #FFCD43 0%, #DD010F 100%), #FF1B1B;
  color: ${theme.palette.text.secondary};
  padding: 2%;
  display: grid;
  grid-template-columns: repeat(1, auto);
  column-gap: 10px;
  row-gap: 10px;
  ${theme.breakpoints.down('sm')} {
    grid-template-columns: repeat(1, auto);
  }
`;

export const link = css`
  text-decoration: none;
  margin: 10px;
`;
