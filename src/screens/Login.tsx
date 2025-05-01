import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { AuthContext } from '../context/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    if (email === 'admin@taskflow.com' && password === '123456') {
      try {
        await login('token');
      } catch (error) {
        Alert.alert('Erro ao fazer login:', error?.toString());
      }
    } else {
      Alert.alert('Credenciais inválidas');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <Text style={styles.logo}>TaskFlow</Text>
        <Text style={styles.subtitle}>Gerencie suas tarefas com simplicidade</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.hint}>Use: admin@taskflow.com / 123456</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  header: {
    alignItems: 'center',
    marginBottom: 40
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3366ff'
  },
  subtitle: {
    fontSize: 16,
    color: '#444',
    marginTop: 8
  },
  form: {},
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1
  },
  button: {
    backgroundColor: '#3366ff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  hint: {
    marginTop: 12,
    textAlign: 'center',
    color: '#999',
    fontSize: 12
  }
});

export default Login;
