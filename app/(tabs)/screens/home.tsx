import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { Link } from 'expo-router';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://placekitten.com/400/400' }} style={styles.image} />
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Ola</Text>
      <Link href="/" asChild>
        <Button mode="contained" style={styles.button}>
          Go to Home
        </Button>
      </Link>
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