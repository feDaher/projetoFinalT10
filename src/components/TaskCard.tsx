import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface TaskCardProps {
  id: number;
  title: string;
  subtitle?: string;
  body: string;
  onDelete: (id: number) => void;
}

export default function TaskCard({ id, title, subtitle, body, onDelete }: TaskCardProps) {
  function confirmDelete() {
    Alert.alert(
      'Excluir Tarefa',
      'Tem certeza que deseja excluir esta tarefa?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', onPress: () => onDelete(id), style: 'destructive' },
      ]
    );
  }

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={confirmDelete} style={styles.deleteButton}>
        <MaterialIcons name="delete" size={30} color="#246bfd" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    position: 'relative',
  },
  deleteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  body: {
    fontSize: 14,
    color: '#444',
  },
});
