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
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CameraScreen({ navigation }) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState("");

  console.log("navigation", navigation);

  const gotoMyPlants = () => {
    navigation.navigate("MyPlants");
  };

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
    return <Text>En attente de permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        L'application n'a pas les droits d'accès à l'appareil photo. Pensez à
        changer vos réglages.
      </Text>
    );
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
          plant: { id: 9 }, //testing id
          image: photoUri,
        });
        if (response.status === 201) {
          alert("Plante enregistrée");
          console.log(response.data);
        } else {
          throw new Error("Erreur lors de l'enregistrement de la plante");
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
        setPhoto(undefined);
        gotoMyPlants();
      }
    };

    return (
      <SafeAreaView style={styles.takenContainer}>
        <View style={{ alignSelf: "auto" }}>
          <Image source={{ uri: photo.uri }} style={styles.preview} />

          <Button title="Partager la plante" onPress={sharePic} />
          <Button
            title="Enregistrer la plante"
            onPress={() => savePicToDatabase(photo.uri, comment)}
          />
          {hasMediaLibraryPermission ? (
            <Button
              title="Sauver l'image dans la pellicule"
              onPress={savePicToRoll}
            />
          ) : undefined}
          <Button title="Rejeter" onPress={() => setPhoto(undefined)} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Comment va cette plante aujourd'hui ?</Text>
      <Text style={styles.text}>{navigation.getParam("id")}</Text>
      <Text style={styles.text}>{navigation.getParam("adress")}</Text>
      {/* <Text style={styles.text}>
        {navigation.getParam("latitude")} & {navigation.getParam(latitude)}
      </Text> */}
      <Camera style={styles.container} ref={cameraRef} />
      <TouchableOpacity style={styles.cancelButton} onPress={gotoMyPlants}>
        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 50,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="arrow-undo-outline" size={36} color="red" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={takePicture}>
        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 50,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="camera-outline" size={36} color="green" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    position: "absolute",
    bottom: 40,
    right: 15,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  cancelButton: {
    position: "absolute",
    bottom: 40,
    left: 15,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  container: {
    flex: 1,
    // backgroundColor: "#6AAF84",
    justifyContent: "center",
    // borderRadius: 20,
    alignItems: "center",
    width: "100%",
    // height: "95%",
    // margin: 10,
  },
  takenContainer: {
    flex: 1,
    // backgroundColor: "#6AAF84",
    justifyContent: "center",
    alignSelf: "flex-start",
    // borderRadius: 20,
    alignItems: "center",
    width: "100%",
    // height: "95%",
    // margin: 10,
  },
  text: { color: "#6AAF84", fontSize: 20, fontWeight: "bold" },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  // overlay: {
  //   ...StyleSheet.absoluteFillObject, // superposer tous les éléments sur l'image
  //   justifyContent: "flex-end",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // buttonContainer: {
  //   backgroundColor: "#fff",
  //   // minWidth: 250,
  //   alignSelf: "flex-start",
  //   textAlignVertical: "bottom",
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   color: "#6AAF84",
  // },
  preview: {
    resizeMode: "contain",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // width: 350,
    // height: "80%",
    // margin: 10,
    // alignSelf: "flex-start",
  },
  // wrapper: { marginBottom: 10 },
  // input: {
  //   borderWidth: 2,
  //   borderColor: "#grey",
  //   minWidth: 1000,
  //   borderRadius: 20,
  //   textAlignVertical: "center",
  //   paddingLeft: 10,
  //   color: "#ffffff",
  // },
});
