import React from 'react';

import { FiPower } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { Container, Header, HeaderContent, Profile } from './styles';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="GoBarber" />

          <Profile>
            <img
              src="https://skylab.rocketseat.com.br/api/users/avatar/profile-30a7c284-0d48-4acb-a095-09b145d3d2a8.jpg"
              alt="Stefano Saffran"
            />

            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
