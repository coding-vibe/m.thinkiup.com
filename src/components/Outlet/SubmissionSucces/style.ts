import { Theme } from '@mui/material';
import { css } from '@emotion/react';

export const icon = css`
  color: green;
  margin: 0 auto;
`;

export const wrap = (theme: Theme) => css`
  position: relative;
  padding: 70px 0px 50px 0px;
  color: ${theme.palette.text.primary};
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const textWrap = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 40px 20px;
  background: rgba(250, 250, 250, 0.3);
  border: 2px solid #fff;
  border-radius: 10px;
`;
