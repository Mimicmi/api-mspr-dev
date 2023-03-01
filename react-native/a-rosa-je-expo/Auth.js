import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('api', {
      username,
      password,
    })
    .then(response => {
      // Si la demande réussit, redirigez l'utilisateur vers la page d'accueil de l'application.
    })
    .catch(error => {
      // Si la demande échoue, affichez un message d'erreur à l'utilisateur.
    });
  };

  return (
    <View>
      <TextInput placeholder="Nom d'utilisateur" onChangeText={setUsername} />
      <TextInput placeholder="Mot de passe" onChangeText={setPassword} />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
