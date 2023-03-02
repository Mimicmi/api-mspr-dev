import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function LoginScreen( { navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Faire quelque chose avec les informations de connexion
    console.log(`Nom d'utilisateur: ${username}, Mot de passe: ${password}`);
  };

  const handleForgotPassword = () => {
    // Naviguer vers la page pour réinitialiser le mot de passe
    console.log('Mot de passe oublié');
  };

  return (
    <View style={styles.container}>
    <Image 
        style={styles.image} source={require('../assets/logo.png')} />
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        onChangeText={setUsername}
        value={username}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
       <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MyPlantsScreen')}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#87CEEB',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  forgotPassword: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});