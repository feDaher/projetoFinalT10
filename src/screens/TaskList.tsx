// TaskListScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import TaskCard from '../components/TaskCard';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

interface Task {
  id: number;
  title: string;
  subtitle?: string;
  body: string;
}

export default function TaskListScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  async function fetchTasks() {
    try {
      const response = await axios.get('http://localhost:3000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('CreateTask')}>
          <Text style={styles.addButtonText}>+ Nova Tarefa</Text>
        </TouchableOpacity>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskCard title={item.title} subtitle={item.subtitle} body={item.body} />
          )}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  addButton: {
    backgroundColor: '#246bfd',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 24,
  },
});
