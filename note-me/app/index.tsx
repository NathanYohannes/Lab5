import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotesScreen from './NotesScreen';
import NewNoteScreen from './NewNote';
import Toast from 'react-native-toast-message'; // Importing toast

export type RootStackParamList = {
  Notes: { notes: { title: string; body: string }[] };
  NewNote: { onAddNote: (note: { title: string; body: string }) => void };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Index() {
  const [notes, setNotes] = useState<{ title: string; body: string }[]>([]);

  // Function to add a new note
  const handleAddNote = (note: { title: string; body: string }) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Notes"
          options={{
            title: 'Note Me', // Custom title for NotesScreen
          }}
        >
          {(props) => <NotesScreen {...props} notes={notes} />}
        </Stack.Screen>
        <Stack.Screen name="NewNote">
          {(props) => <NewNoteScreen {...props} onAddNote={handleAddNote} />}
        </Stack.Screen>
      </Stack.Navigator>

      {/* Toast component */}
      <Toast />
    </>
  );
}
