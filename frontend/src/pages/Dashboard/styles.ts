import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.2);
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  div.react-toggle {
    margin-left: auto;
    margin-right: 15px;
  }

  button {
    background: transparent;
    border: 0;

    svg {
      color: ${({ theme }) => theme.colors.text};
      width: 20px;
      height: 20px;

      :hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
  }

  span {
    color: ${({ theme }) => theme.colors.welcome};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #312e38;

  img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 50%;
    border-width: ${({ theme }) => (theme.title === 'dark' ? '3px' : '0')};
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.primary};
    border-image: initial;
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1; /* ocupar todo o espaço - o espaço ocupado pelos 'irmãos' */
  margin-right: 120px;

  h1 {
    font-size: 36px;
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: ${({ theme }) => theme.colors.primary};
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
    font-weight: 400;
  }

  > div {
    background: ${({ theme }) =>
      theme.title === 'light' ? '#fff' : '#3e3b47'};
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;
    transition: transform 0.2s;

    ${({ theme }) =>
      theme.title === 'light' &&
      css`
        box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
      `};

    &::before {
      content: '';
      background: ${({ theme }) => theme.colors.primary};
      height: 80%;
      width: 1px;
      position: absolute;
      left: 0;
      top: 10%;
    }

    &:hover {
      transform: translateX(10px);
    }

    > img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    > strong {
      margin-left: 24px;
      color: ${({ theme }) => theme.colors.title};
    }

    > span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.text};

      > svg {
        color: ${({ theme }) => theme.colors.primary};
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.cardBackground};
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 20px;
  }

  > span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.welcome};
    width: 70px;

    svg {
      color: ${({ theme }) => theme.colors.primary};
      margin-right: 8px;
    }
  }

  > div {
    display: flex;
    flex: 1;
    align-items: center;
    background: ${({ theme }) => theme.colors.secondary};
    padding: 16px 24px;
    margin-left: 24px;
    border-radius: 10px;
    ${({ theme }) =>
      theme.title === 'light' &&
      css`
        border: 1px solid #222;
      `};

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: ${({ theme }) => theme.colors.title};
      font-size: 20px;
    }
  }
`;

export const Initials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background};

  > span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
  }
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;

    ${({ theme }) =>
      theme.title === 'light' &&
      css`
        box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
      `};
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.title};
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${({ theme }) => shade(0.2, theme.colors.disabled)};
    ${({ theme }) =>
      theme.title === 'light' &&
      css`
        border: 1px solid #222;
      `};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: ${({ theme }) => theme.colors.disabled} !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: ${({ theme }) => theme.colors.primary} !important;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.secondary} !important;
  }
`;
