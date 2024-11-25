import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message'; // Importing toast

interface NewNoteScreenProps {
  navigation: any;
  onAddNote: (note: { title: string; body: string }) => void;
}

const NewNoteScreen = ({ navigation, onAddNote }: NewNoteScreenProps) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // Save note and validate input
  const handleSave = () => {
    if (!title || !body) {
      // Show toast if title or body is empty
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Title and body cannot be empty!',
      });
      return; // Prevent navigation if validation fails
    }

    // Add the note and navigate back
    onAddNote({ title, body });
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Body"
        value={body}
        onChangeText={setBody}
      />
      <Button title="Save Note" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default NewNoteScreen;
