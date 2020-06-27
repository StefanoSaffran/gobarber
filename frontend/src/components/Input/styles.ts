import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  background: ${({ theme }) => theme.colors.secondary};
  color: #666360;
  border: 2px solid ${({ theme }) =>
    theme.title === 'dark' ? theme.colors.secondary : theme.colors.title};
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}

  input {
    flex: 1;
    background: ${({ theme }) => theme.colors.secondary};
    border: 0;
    color: ${({ theme }) => theme.colors.welcome};
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #f4ede8;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
