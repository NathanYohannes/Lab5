import React, { useState } from 'react';
import { TextInput, StyleSheet, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './index';

type NewNoteScreenNavigationProp = StackNavigationProp<RootStackParamList, 'NewNote'>;

interface NewNoteProps {
  onAddNote: (note: { title: string; body: string }) => void;
}

const NewNote = ({ onAddNote }: NewNoteProps) => {
  const navigation = useNavigation<NewNoteScreenNavigationProp>();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSave = () => {
    if (!title.trim() || !body.trim()) {
      // Show error message if empty
      alert('Please fill in both title and body.');
      return;
    }

    // Add the new note and navigate back
    onAddNote({ title, body });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Note Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Note Body"
        value={body}
        onChangeText={setBody}
        multiline
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});

export default NewNote;
