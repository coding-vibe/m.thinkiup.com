import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const modal = css`
  & .MuiPaper-root {
    border: 3px solid #000;
    border-radius: 10px;
  }
`;

export const privacyTermsWrap = (theme: Theme) => css`
  margin: 10% 5% 0 5%;
  background: ${theme.palette.background.paper};
  color: ${theme.palette.text.secondary};
  border-radius: 10px;
  padding: 50px;
`;

export const wrap = (theme: Theme) => css`
  padding: 17% 7%;
  border: 3px solid ${theme.palette.text.disabled};
  border-radius: 10px;
`;

export const title = css`
  text-align: left;
`;

export const contentWrap = (theme: Theme) => css`
  display: flex;
  gap: 30px;
  align-items: center;
  ${theme.breakpoints.up('sm')} {
    flex-direction: row;
  }
  ${theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`;
