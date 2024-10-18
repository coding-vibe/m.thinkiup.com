import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const modal = (theme: Theme) => css`
  background: rgba(0, 0, 0, 0.6);
  .mui-3ddi80-MuiPaper-root-MuiDialog-paper {
    ${theme.breakpoints.down('xs')} {
      margin: 5px;
    }
  }
  .Mui-checked {
    color: ${theme.palette.text.primary} !important;
  }
  .MuiFormHelperText-root {
    span {
      color: red;
      font-weight: 700;
    }
  }
  .MuiInputBase-root {
    &:focus-visible {
      outline: none;
      border: none;
    }
  }
  .MuiDialogContent-root {
    padding: 0;
  }
  .MuiPaper-root {
    padding: 50px 30px;
    background: linear-gradient(180deg, #00FF8D 0%, #FF0010 100%);
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 800px;

    ${theme.breakpoints.down('sm')} {
      width: 90%;
      padding: 40px 10px;
    }
    ${theme.breakpoints.down('xs')} {
      padding: 60px 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    input {
      width: 100%;
      border-radius: 20px;
      &:focus-visible {
        border: unset;
      }
    }
  }
  form {
    button {
      width: 90%;
      margin: 20px auto;
      display: flex;
      justify-content: center;
      ${theme.breakpoints.down('sm')} {
        margin: 5px auto;
      }
      ${theme.breakpoints.down('xs')} {
        width: 100%;
        font-size: 14px;
      }
    }
  }
`;

export const contentWrap = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  fieldset {
    border-radius: 20px;
  }
  input {
    display: flex;
    padding: 20px 20px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 20px;
    background: ${theme.palette.text.primary};
    color: ${theme.palette.text.secondary};
    ${theme.breakpoints.down('sm')} {
      padding: 10px 10px;
    }
  }
`;

export const input = () => css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const label = (theme: Theme) => css`
  color: ${theme.palette.text.primary};
  font-size: 14px !important;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  ${theme.breakpoints.down('sm')} {
    font-size: 12px !important;
  }
  a {
    text-decoration: underline;
    text-underline-offset: 5px;
    transition: all 0.4s;
    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 3px;
    }
  }
`;

export const title = (theme: Theme) => css`
  color: ${theme.palette.text.primary};
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  padding: 0;
  text-align: center;
  ${theme.breakpoints.down('sm')} {
    font-size: 20px;
  }
  ${theme.breakpoints.down('xs')} {
    font-size: 18px;
    text-align: center;
  }
`;

export const close = (theme: Theme) => css`
  position: absolute;
  top: 20px;
  right: 20px;
  color: red;
  ${theme.breakpoints.down('xs')} {
    top: 10px;
    right: 10px;
  }
  svg {
    transition: all 0.4s;
    fill: #fff;
  }
  &:hover {
    svg {
      transform: scale(1.3);
    }
  }
  svg {
    width: 34px;
    height: 34px;
    ${theme.breakpoints.down('xs')} {
      width: 25px;
      height: 25px;
    }
  }
`;

export const errorMsg = () => css`
  color: red;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
`;

export const frameModal = () => css`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 50%;
  left: 50%;
  width: 101%;
  height: 101%;
  z-index: 10000;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const iFrame = (theme: Theme) => css`
  ${theme.breakpoints.down('xs')} {
    margin: 10px;
    height: 80%;
  }
`;
