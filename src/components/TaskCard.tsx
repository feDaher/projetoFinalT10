import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TaskCardProps {
  title: string;
  subtitle?: string;
  body: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, subtitle, body }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    color: '#444',
  },
});

export default TaskCard;
