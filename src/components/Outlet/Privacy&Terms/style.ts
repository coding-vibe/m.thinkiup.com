import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const modalLink = (theme: Theme) => css`
  color: ${theme.palette.text.primary};
  font-weight: 600;
  margin: 0px 3px 0px 3px;
  &:hover {
    text-decoration: underline;
    color: ${theme.palette.text.disabled};
  }
`;

export const box = (theme: Theme) => css`
  color: ${theme.palette.text.primary};
  background: ${theme.palette.background.paper};
  text-align: left;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  padding: 16px;
  overflow-y: auto;
  max-height: 80vh;
`;
