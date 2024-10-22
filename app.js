import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle Sign In button press
  const handleSignIn = () => {
    console.log('Sign In clicked!', { email, password });
  };

  // Handle Create Account button press
  const handleCreateAccount = () => {
    console.log('Create New Account clicked!', { email, password });
  };

  return (
    <View style={styles.container}>
      {/* Title aligned to top-left */}
      <Text style={styles.title}>Sign In</Text>

      {/* Form and buttons aligned in the middle */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Type your address"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
          placeholder="Type your password"
        />

        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
          <Text style={styles.createAccountButtonText}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafc',
    gap: 64
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingTop: 64,  // Title at the top
    paddingLeft: 32,
    paddingBottom: 32,
    backgroundColor: '#fff',
    flex: 0
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 32
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
    alignSelf: 'flex-start',
  },
  input: {
    height: 50,
    width: '100%',  // Full width input
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  signInButton: {
    backgroundColor: '#08cc8c',  // Lighter green
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',  // Full width button
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  createAccountButton: {
    backgroundColor: '#8c92a2',  // Lighter gray
    padding: 15,
    borderRadius: 8,
    width: '100%',  // Full width button
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;