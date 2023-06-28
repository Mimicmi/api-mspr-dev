import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, } from 'react-native';
import axios from 'axios';



export default function SignupForm() {
  const [pseudo, setPseudo] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [confirmMotDePasse, setConfirmMotDePasse] = useState('');


  const handleSignupPress = async () => {
    const user = {
      email: 'votre_email',
      password: 'votre_mot_de_passe',
      pseudo: 'votre_pseudo'
    }
    if (pseudo && email && motDePasse && confirmMotDePasse) {
      if (motDePasse === confirmMotDePasse) {
        try {
          const response = await axios.post('http://localhost:3000/users', user);
          console.log(response.data);
          alert('Compte créé avec succès !');
        } catch (error) {
          console.error(error);
          alert('Une erreur s\'est produite lors de la création du compte.');
        }
      } else {
        alert('Les mots de passe ne correspondent pas.');
      }
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };
  
  return (

    <View style={styles.container}>
      <Text style={styles.heading}>Créer un compte</Text>
      <TextInput
        style={styles.input}
        placeholder="pseudo"
        value={pseudo}
        onChangeText={setPseudo}
      />
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        value={prenom}
        onChangeText={setPrenom}
      />
      <TextInput
        style={styles.input}
        placeholder="Date de naissance (jj/mm/aaaa)"
        value={dateNaissance}
        onChangeText={setDateNaissance}
      />
      <TextInput
        style={styles.input}
        placeholder="Adresse"
        value={adresse}
        onChangeText={setAdresse}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={motDePasse}
        onChangeText={setMotDePasse}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmer le mot de passe"
        value={confirmMotDePasse}
        onChangeText={setConfirmMotDePasse}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignupPress}
      >
        <Text style={styles.buttonText}>Créer un compte</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#87CEEB',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },

});

