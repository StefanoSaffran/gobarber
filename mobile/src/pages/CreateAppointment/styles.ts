import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';
import { IProvider } from '../Dashboard';

interface IProviderContainerProps {
  selected: boolean;
}

interface IProviderImageProps {
  selected: boolean;
}

interface IProviderInitialsProps {
  selected: boolean;
}

interface IProviderNameProps {
  selected: boolean;
}

interface IHourProps {
  available: boolean;
  selected: boolean;
}

interface IHourTextProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: #f5ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  margin-left: 16px;
`;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  border-width: 1px;
  border-color: #ff9000;
  padding: 3px;
  margin-left: auto;
`;

export const UserInitialsContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background: #312e38;
  border: 1px #ff9000;
  padding: 3px;
`;
export const UserInitials = styled.Text`
  color: #ff9000;
  font-size: 24px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 24 },
  showsVerticalScrollIndicator: false,
})``;

export const ProvidersListContainer = styled.View`
  height: 112px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<IProvider>)`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton)<IProviderContainerProps>`
  background: ${({ selected }) => (selected ? '#ff9000' : '#3e3b47')};
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 10px;
`;

export const ProviderAvatar = styled.Image<IProviderImageProps>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border-width: 1px;
  border-color: ${({ selected }) => (selected ? '#312e38' : '#ff9000')};
  padding: 3px;
  margin-left: auto;
`;

export const ProviderInitialsContainer = styled.View<IProviderInitialsProps>`
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: #312e38;
  border-width: 1px;
  border-color: ${({ selected }) => (selected ? '#28262e' : '#ff9000')};
  padding: 3px;
`;
export const ProviderInitials = styled.Text`
  color: #ff9000;
  font-size: 12px;
`;

export const ProviderName = styled.Text<IProviderNameProps>`
  margin-left: 8px;
  color: ${({ selected }) => (selected ? '#232129' : '#f4ede8')};
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`;

export const Calendar = styled.View``;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
  font-size: 24px;
  margin: 0 24px 24px;
`;

export const OpenDatePickerButton = styled(RectButton)`
  height: 46px;
  background: #ff9000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;

export const OpenDatePickerButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #232129;
  font-size: 16px;
`;

export const Schedule = styled.View`
  padding: 24px 0 16px;
`;

export const Section = styled.View`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.Text`
  font-family: 'RobotoSlab-Regular';
  color: #999591;
  font-size: 18px;
  margin: 0 24px 12px;
`;

export const SectionContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Hour = styled(RectButton)<IHourProps>`
  background: ${props => (props.selected ? '#ff9000' : '#3e3b47')};
  padding: 12px;
  border-radius: 10px;
  margin-right: 8px;

  opacity: ${props => (props.available ? 1 : 0.3)};
`;

export const HourText = styled.Text<IHourTextProps>`
  color: ${props => (props.selected ? '#232129' : '#f4ede8')};
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAppointmentButton = styled(RectButton)`
  height: 50px;
  background: #ff9000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;

export const CreateAppointmentButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #232129;
  font-size: 18px;
`;
