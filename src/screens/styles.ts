import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f7f9fc;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #246bfd;
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 32px;
`;

export const LogoutButton = styled.TouchableOpacity`
  background-color: #246bfd;
  padding: 12px 24px;
  border-radius: 8px;
`;

export const LogoutButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
