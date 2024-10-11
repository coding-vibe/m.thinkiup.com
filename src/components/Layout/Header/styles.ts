import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const header = (theme: Theme) => css`
  background-color: ${theme.palette.background.paper};
`;

export const headerWrap = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${theme.breakpoints.up('md')} {
    position: static;
  }

  ${theme.breakpoints.down('md')} {
    position: sticky;
    top: 0;
    z-index: 2;
  }
`;

export const nav = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;
