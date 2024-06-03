import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';


export default function LoginScreen() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

  useEffect(() => {
    if (username.includes('@')) {
      setIsEmail(true);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsUsernameValid(emailRegex.test(username));
    } else {
      setIsEmail(false);
      setIsUsernameValid(username.length >= 5 && username.length <= 10);
    }
  }, [username]);

  useEffect(() => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{5,}$/;
    setIsPasswordValid(passwordRegex.test(password));
  }, [password]);

  const handleLogin = () => {
    if (isUsernameValid && isPasswordValid) {
      // Handle successful login
      console.log('Login successful');
    } else {
      // Handle validation error
      console.log('Validation error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        label="Username or Email"
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
        mode="outlined"
        error={!isUsernameValid && username !== ''}
      />
      <HelperText type="error" visible={!isUsernameValid && username !== ''}>
        {isEmail
          ? 'Enter a valid email address.'
          : 'Username must be 5-10 characters long.'}
      </HelperText>
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        mode="outlined"
        secureTextEntry
        error={!isPasswordValid && password !== ''}
      />
      <HelperText type="error" visible={!isPasswordValid && password !== ''}>
        Password must be at least 5 characters long and contain at least one uppercase letter, one lowercase letter, and one symbol.
      </HelperText>
      <Button mode="contained" onPress={handleLogin} disabled={!isUsernameValid || !isPasswordValid}>
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
  },
});