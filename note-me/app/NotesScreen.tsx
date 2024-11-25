import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { RootStackParamList } from './index';
import { RouteProp } from '@react-navigation/native';
import { FAB } from 'react-native-paper'; // Importing FAB component
import { StackNavigationProp } from '@react-navigation/stack';

interface NotesScreenProps {
  notes: { title: string; body: string }[]; // Notes array prop
  navigation: StackNavigationProp<RootStackParamList, 'Notes'>; // Navigation prop
}

const NotesScreen = ({ notes, navigation }: NotesScreenProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.noteContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
      {/* Floating Action Button */}
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('NewNote', { onAddNote: (note: { title: string; body: string }) => {} })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  noteContainer: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#6200ee', // Change the background color as needed
  },
});

export default NotesScreen;
