import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const wrap = (theme: Theme) => css`
  display: flex;
  gap: 30px;
  margin-bottom: 100px;
  flex-direction: row-reverse;
  &:nth-child(even) {
    flex-direction: row;
    ${theme.breakpoints.down('md')} {
      flex-direction: column;
    }
  }
  ${theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`;

export const wrapRev = (theme: Theme) => css`
  ${theme.breakpoints.down('md')} {
    flex-direction: column-reverse;
  }
`;

export const img = () => css`
  width: 438px;
  height: 375px;
  border-radius: 10px;
`;

export const txtContent = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 65%;
  ${theme.breakpoints.down('md')} {
    max-width: 100%;
    margin: 0 auto;
  }
`;
