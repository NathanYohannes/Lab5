import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For FAB icon

interface NotesScreenProps {
  notes: { title: string; body: string }[];
  navigation: any; // This is to allow navigation to the "NewNote" screen
}

const NotesScreen: React.FC<NotesScreenProps> = ({ notes, navigation }) => {
  return (
    <View style={styles.container}>
      {notes.length === 0 ? (
        <Text style={styles.noNotesText}>No notes here</Text>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.noteItem}>
              <Text style={styles.noteTitle}>{item.title}</Text>
              <Text style={styles.noteBody}>{item.body}</Text>
            </View>
          )}
        />
      )}

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('NewNote')}
      >
        <MaterialCommunityIcons name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noNotesText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
  noteItem: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    width: '100%',
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  noteBody: {
    fontSize: 14,
    color: 'gray',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: '#2196F3', // You can change the color
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8, // Shadow for Android
  },
});

export default NotesScreen;
