import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const indent = css`
  margin-bottom: 20px;
`;

export const wrap = (theme: Theme) => css`
  height: 100%;
  padding: 40px;
  background-color: ${theme.palette.background.paper};
`;
