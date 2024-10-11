import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const section = css`
  position: relative;
`;

export const img = css`
  max-width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

export const wrap = () => css`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 42px;
  text-align: center;


`;

export const title = (theme: Theme) => css`
  color: ${theme.palette.text.secondary};
`;
