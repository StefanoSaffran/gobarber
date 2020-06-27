import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IAvatarProps {
  hasAvatar: number;
}

export const Container = styled.div`
  > header {
    height: 144px;
    background: ${({ theme }) => theme.colors.secondary};

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        width: 24px;
        height: 24px;
        color: ${({ theme }) => theme.colors.text};

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: -175px auto;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const Avatar = styled.div<IAvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 186px;
  height: 186px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 32px;
  position: relative;
  align-self: center;

  ${({ hasAvatar }) =>
    !hasAvatar &&
    css`
      border: 3px solid ${({ theme }) => theme.colors.primary};
    `}

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    border-image: initial;
    object-fit: cover;

    ${({ hasAvatar }) =>
      hasAvatar &&
      css`
        display: block;
        border: 3px solid ${({ theme }) => theme.colors.primary};
        padding: 3px;
      `}
  }

  span {
    font-size: 60px;
    color: ${({ theme }) => theme.colors.primary};
  }

  label {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.colors.background};
    }

    &:hover {
      background: ${({ theme }) => `${shade(0.2, theme.colors.primary)}`};
    }
  }
`;
