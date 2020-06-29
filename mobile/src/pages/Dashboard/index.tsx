import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { View } from 'react-native';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import * as S from './styles';

export interface IProvider {
  id: string;
  name: string;
  avatar_url: string;
  nameInitials?: string;
}

const Dashboard: React.FC = () => {
  const [providers, setProviders] = useState<IProvider[]>([]);
  const { user, signOut } = useAuth();
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  const navigateToCreateAppointment = useCallback(
    (providerId: string) => {
      navigate('CreateAppointment', { providerId });
    },
    [navigate],
  );

  const nameInitials = useMemo(() => {
    return user.name
      .split(' ')
      .map(name => name.charAt(0).toUpperCase())
      .join('')
      .substring(0, 2);
  }, [user.name]);

  useEffect(() => {
    api.get<IProvider[]>('providers').then(response => {
      setProviders(
        response.data.map(provider =>
          provider.avatar_url
            ? provider
            : {
                ...provider,
                nameInitials: provider.name
                  .split(' ')
                  .map(name => name.charAt(0).toUpperCase())
                  .join('')
                  .substring(0, 2),
              },
        ),
      );
    });
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>
          Bem vindo, {'\n'}
          <S.UserName>{user.name}</S.UserName>
        </S.HeaderTitle>

        <S.ProfileButton onPress={navigateToProfile}>
          {user.avatar_url ? (
            <S.UserAvatar source={{ uri: user.avatar_url }} />
          ) : (
            <S.UserInitialsContainer>
              <S.UserInitials>{nameInitials}</S.UserInitials>
            </S.UserInitialsContainer>
          )}
        </S.ProfileButton>

        <S.SignOutButton onPress={handleSignOut}>
          <Icon name="log-out" color="#ff9000" size={20} />
        </S.SignOutButton>
      </S.Header>

      <S.ProvidersList
        data={providers}
        keyExtractor={provider => provider.id}
        ListFooterComponent={<View style={{ marginBottom: 32 }} />}
        ListHeaderComponent={
          <S.ProvidersListTitle>Cabeleireiros</S.ProvidersListTitle>
        }
        renderItem={({ item: provider }) => (
          <S.ProviderContainer
            onPress={() => {
              navigateToCreateAppointment(provider.id);
            }}
          >
            {provider.avatar_url ? (
              <S.ProviderAvatar source={{ uri: provider.avatar_url }} />
            ) : (
              <S.ProviderInitialsContainer>
                <S.ProviderInitials>{provider.nameInitials}</S.ProviderInitials>
              </S.ProviderInitialsContainer>
            )}

            <S.ProviderInfo>
              <S.ProviderName>{provider.name}</S.ProviderName>

              <S.ProviderMeta>
                <Icon name="calendar" size={14} color="#ff9000" />
                <S.ProviderMetaText>segunda à sexta</S.ProviderMetaText>
              </S.ProviderMeta>

              <S.ProviderMeta>
                <Icon name="clock" size={14} color="#ff9000" />
                <S.ProviderMetaText>8h às 18h</S.ProviderMetaText>
              </S.ProviderMeta>
            </S.ProviderInfo>
          </S.ProviderContainer>
        )}
      />
    </S.Container>
  );
};

export default Dashboard;
