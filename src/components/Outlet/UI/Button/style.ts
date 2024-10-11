import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const link = (theme: Theme) => css`
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 50%;
  text-align: center;
  padding: 25px 20px;
  transition: all 0.4s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  border:1px solid yellow;
  &:hover {
    box-shadow: 10px 0px 10px 0 rgba(255, 255, 255, 0.4);
    background-color: ${theme.palette.background.paper};
    transform: scale(1.1);
  }
  ${theme.breakpoints.down('xs')} {
    padding: 20px 15px;
    font-size: 12px;
  }
`;

export const button = (theme: Theme) => css`
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 575%;
  text-align: center;
  padding: 10px 20px;

  border: none;
  transition: all 0.4s ease-in;
  &:hover {
    box-shadow: 10px 20px 40px 0 rgba(255, 255, 255, 0.4);
    background-color: ${theme.palette.background.paper};
    transform: scale(1.1);
  }

  ${theme.breakpoints.down('xs')} {
    padding: 10px 15px;
    font-size: 12px;
  }
`;
