import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /*test de connexion avec des données en dure*/

 /* const handleLogin = () => {
    if (username ==="test" && password === "mdp") {
        console.log("connexion réussite");
        navigation.navigate("MyPlants");
      } else {
        console.log("connexion échouée");
      }
  };
  const handleForgotPassword = () => {
    console.log("Mot de passe oublié");
  };*/ 

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.status === 200) {
        navigation.navigate('MyPlants');
      } else {
        setErrorMessage("Nom d'utilisateur ou mot de passe incorrect");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  /* c'est juste pour faire beau XD  et pour que ça fonctionn en bas*/
  const handleForgotPassword = () => {
    console.log("Mot de passe oublié");
  };

  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")} />
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
        /*onPress={() => navigation.navigate("MyPlants")}*/
        onPress={handleLogin} 
      >
        {loading ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.buttonText}>Se connecter ici</Text>}
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
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
    borderColor: "black",
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#87CEEB",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  forgotPassword: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
