import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { Link } from 'expo-router';


export default function TaskScreen() {

  const handleThemeChange = () => {

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Change theme and language</Text>
      <Button mode="contained" style={styles.button} onPress={() => handleThemeChange()}>
        Change Theme
      </Button>
      <Button mode="contained" style={styles.button} onPress={() => handleLanguageChange()}>
        Change Language
      </Button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
  },
});

function handleThemeChange() {
  // TODO: Implement theme change logic
}

function handleLanguageChange() {
  // TODO: Implement language change logic
}