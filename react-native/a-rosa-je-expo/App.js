import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

export default function App() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return <Text>no access to camera. Please change settings</Text>;
  }

  let takePicture = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => setPhoto(undefined));
    };

    let savePicToRoll = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() =>
        setPhoto(undefined)
      );
    };

    const savePicToDatabase = async (photoUri) => {
      if (!photoUri) return;
      setIsLoading(true);
      try {
        const response = await axios.post("http://localhost:8090/photos", {
          photoUri,
        });
        if (response.status === 201) {
          alert("Plante enregistrée");
          console.log(response.data);
          setIsLoading(false);
          setPhoto(undefined);
        } else {
          throw new Error("Erreur lors de l'enregistrement de la plante");
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.wrapper}>
            <View style={styles.wrapper}>
              {isLoading ? (
                <Text style={styles.formHeading}>
                  Enregistrement de la plante...
                </Text>
              ) : (
                <Text style={styles.formHeading}>
                  Prenez la plante en photo
                </Text>
              )}
              <TouchableOpacity
                style={styles.sendButton}
                onPress={() => handleSend(photo.uri, comment)}
              >
                <Text style={styles.sendText}>Envoyer</Text>
              </TouchableOpacity>
              {/* <View style={styles.wrapper}>
            <View style={styles.wrapper}> */}
            </View>
          </View>
          <Image
            source={{ uri: "data:image/jpg;base64" + photo.base64 }}
            style={styles.preview}
          />
          <Button title="Partager la plante" onPress={sharePic} />
          <Button
            title="Enregsitrer la plante"
            onPress={() => savePicToDatabase(photo.uri, comment)}
          />
          {hasMediaLibraryPermission ? (
            <Button title="Sauver l'image" onPress={savePicToRoll} />
          ) : undefined}
          <Button title="Rejeter" onPress={() => setPhoto(undefined)} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button title="Prendre la plante en photo," onPress={takePicture} />
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
  preview: {
    flex: 1,
    alignSelf: "stretch",
  },
  wrapper: { marginBottom: 10 },
  input: {
    borderWidth: 2,
    borderColor: "#grey",
    minWidth: 200,
    borderRadius: 20,
    textAlignVertical: "center",
    paddingLeft: 10,
    color: "#ffffff",
  },
});
