import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Container, Title, Subtitle, LogoutButton, LogoutButtonText } from './styles';

const Home: React.FC = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Container>
      <Title>Bem-vindo ao TaskFlow!</Title>
      <Subtitle>Gerencie suas tarefas com simplicidade</Subtitle>

      <LogoutButton onPress={logout}>
        <LogoutButtonText>Sair</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
};

export default Home;
