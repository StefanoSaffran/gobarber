import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => `${shade(0.2, theme.colors.primary)}`};
  }
`;
