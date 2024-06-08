import React from 'react';
import { Stack } from 'expo-router';

export default function TabLayout() {

  return (
    <Stack
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="newTask" options={{headerShown: true, title:'Nueva Tarea' }} />
      <Stack.Screen name="[id]" options={{headerShown: true, title:'Tarea' }} />
    </Stack>
  );
}