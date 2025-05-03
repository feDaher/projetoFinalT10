import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function CreateTaskScreen() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [body, setBody] = useState('');
  const navigation = useNavigation();

  async function handleSave() {
    if (!title || !body) {
      Alert.alert('Título e corpo são obrigatórios');
      return;
    }

    try {
      await axios.post('http://localhost:3000/tasks', {
        title,
        subtitle: subtitle || undefined,
        body,
      });
      Alert.alert('Tarefa criada com sucesso!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro ao criar tarefa');
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Título da tarefa" />

      <Text style={styles.label}>Subtítulo (opcional)</Text>
      <TextInput style={styles.input} value={subtitle} onChangeText={setSubtitle} placeholder="Subtítulo" />

      <Text style={styles.label}>Corpo</Text>
      <TextInput
        style={[styles.input, { height: 50 }]}
        value={body}
        onChangeText={setBody}
        multiline
        placeholder="Descrição da tarefa"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#f9f9f9',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#246bfd',
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
