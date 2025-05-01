import React, { useContext} from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const Home: React.FC = () => {
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <Text>Home</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default Home;
