import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotesScreen from './NotesScreen';
import NewNoteScreen from './NewNote';

export type RootStackParamList = {
  Notes: { notes: { title: string; body: string }[] }; // Explicitly typing notes as part of the route params
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
    
      <Stack.Navigator>
        {/* Passing the notes as part of the route params to NotesScreen */}
        <Stack.Screen name="Notes">
          {(props) => <NotesScreen {...props} notes={notes} />}
        </Stack.Screen>
        {/* Passing the onAddNote function to NewNoteScreen */}
        <Stack.Screen name="NewNote">
          {(props) => <NewNoteScreen {...props} onAddNote={handleAddNote} />}
        </Stack.Screen>
      </Stack.Navigator>
  );
}
