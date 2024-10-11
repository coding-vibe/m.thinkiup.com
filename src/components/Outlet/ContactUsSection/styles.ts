import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const section = css`
  position: relative;
  text-align: center;
`;

export const mainWrap = (theme: Theme) => css`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 60px;
  background: ${theme.palette.background.paper};
  color: ${theme.palette.text.primary};
  box-shadow: none;
  img {
    border-radius: 10px;
  }
  ${theme.breakpoints.up('lg')} {
    padding: 5% 10%;
    flex-direction: row;
  }
  ${theme.breakpoints.down('lg')} {
    padding: 5%;
    flex-direction: column;
  }
`;

export const fields = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const fieldsWrap = (theme: Theme) => css`
  width: 100%;
  display: flex;
  ${theme.breakpoints.up('lg')} {
    flex-direction: row;
    gap: 32px;
  }

  ${theme.breakpoints.down('lg')} {
    flex-direction: column;
    gap: 0px;
  }
`;

export const input = (theme: Theme) => css`
  margin-bottom: 32px;
  width: 100%;
  height: 60px;

  & .MuiInputBase-formControl {
    border-radius: 10px;
    background-color: ${theme.palette.text.primary};
    color: ${theme.palette.text.disabled};
  }

  & .MuiOutlinedInput-notchedOutline {
    border-width: 0;
  }

  & .MuiFormLabel-root {
    color: ${theme.palette.text.disabled};
  }
`;

export const button = css`
  display: flex;
  justify-content: right;
`;
