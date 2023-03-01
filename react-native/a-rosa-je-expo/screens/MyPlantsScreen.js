import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Ionicons from "react-native-vector-icons/Ionicons";

import nopic from "../assets/nopic.jpeg";

export default function MyPlantsScreen({ navigation }) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState("");

  const openCamera = () => {
    navigation.navigate("Camera");
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

  // TODO: get the client id from the user
  const clientId = 8; // testClient
  let myPlantsList = [
    // {
    //   id: 9,
    //   address: "Owner id 40 address 2nd item",
    //   latitude: 22.99,
    //   longitude: 33.789,
    //   profil_photo: "../assets/testpic.jpeg",
    // },
    // {
    //   id: 10,
    //   address: "ici",
    //   latitude: 22.99,
    //   longitude: 33.789,
    //   profil_photo: "../assets/testpic.jpeg",
    // },
    // {
    //   id: 11,
    //   address: "là",
    //   latitude: 22.99,
    //   longitude: 33.789,
    //   profil_photo: "../assets/testpic.jpeg",
    // },
  ];

  useEffect(() => {
    try {
      console.log("useEffect: axios: myPLants: IN", clientId);
      myPlantsList = axios.get(
        `http://localhost:8090/plants/client/${clientId}`
      );
      // myPlantsList = [
      //   {
      //     id: 9,
      //     address: "Owner id 40 address 2nd item",
      //     latitude: 22.99,
      //     longitude: 33.789,
      //     profil_photo: "pic2",
      //   },
      // ];
    } catch (error) {
      console.error(error);
    }
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

  return (
    <View style={{ felx: 1 }}>
      {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> */}
      {myPlantsList.length === 0 && <NoPlants />}
      {myPlantsList.length > 0 && (
        <HasPlants
          myPlantsList={myPlantsList}
          hasCameraPermission={hasCameraPermission}
        />
      )}

      {!hasCameraPermission && (
        <Text>
          L'accès à l'appareil photo a été restreint par l'utilisateur. Pour
          vous en servir, veuillez modifier les réglages.
        </Text>
      )}
    </View>
  );
}

const NoPlants = () => {
  return <Text>Vous n'avez pas de plantes. Ajoutez-en</Text>;
};

const HasPlants = (props) => {
  const { myPlantsList, hasCameraPermission } = props;
  console.log("HasPlants: myPlantsList", myPlantsList);
  const renderPlant = ({ item }) => <MyPlant plant={item} />;

  return (
    <View>
      <FlatList
        data={myPlantsList}
        renderItem={renderPlant}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        // columnWrapperStyle={styles.columnWrapper}
        // contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const MyPlant = (props) => {
  const { plant } = props;
  console.log("MyPlant: props", plant);
  return (
    <TouchableOpacity
      style={{ width: "50%", padding: 10 }}
      onPress={() => navigation.navigate("Camera", { plant })}
      // onPress={() => console.log(plant.id)}
    >
      {/* <View style={styles.card}> */}
      <View
        style={{
          backgroundColor: "lightgreen",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        {/* <View style={styles.imageContainer}> */}
        <View style={{ height: 200 }}>
          <Image
            style={{
              backgroundColor: "limegreen",
              flex: 1,
              margin: 10,
              width: null,
              borderRadius: 60,
              resizeMode: "cover",
            }}
            // style={styles.image}
            source={plant.profil_photo ? nopic : { uri: plant.profil_photo }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.column}>
            <Text style={styles.label}>Nom</Text>
            <Text style={styles.value}>Votre Plante {plant.id}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Adresse</Text>
            <Text style={styles.value}>{plant.address}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Espece</Text>
            <Text style={styles.value}>
              {plant?.specie?.name || "Non spécifiée"}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "blue",
  //   // borderRadius: 10,
  //   // padding: 10,
  //   // margin: 10,
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  columnWrapper: { justifyContent: "center" },
  // contentContainer: { backgroundColor: "blue", flexGrow: 1 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    // paddingHorizontal: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    // backgroundColor: "#FFF",
    borderRadius: 20,
    elevation: 2,
    // flex: 1,
    backgroundColor: "#79C753",
    // borderRadius: 10,
    // padding: 10,
    // margin: 10,
    // // maxHeight: "50%",
    // // maxWidth: "50%",
    // width: "40%",
    // alignSelf: "stretch",
  },
  // columnn: {
  //   flexDirection: "columnn",
  //   alignItems: "center",
  //   marginBottom: 5,
  //   backgroundColor: "orange",
  // },
  imageContainer: {
    backgroundColor: "cyan",
    // flex: 1,
    width: "45%",
    height: 200,
    borderRadius: 35,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    // height: 120,
    // borderRadius: 10,
    // resizeMode: "cover",
  },
  detailsContainer: {
    flex: 2,
    paddingLeft: 10,
  },
  label: {
    fontWeight: "bold",
    flex: 1,
  },
  value: {
    flex: 3,
  },

  // actionButton: {
  //   position: "absolute",
  //   bottom: 40,
  //   right: 15,
  //   width: 60,
  //   height: 60,
  //   borderRadius: 30,
  //   backgroundColor: "green",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderWidth: 1,
  //   borderColor: "white",
  // },
  // cancelButton: {
  //   position: "absolute",
  //   bottom: 40,
  //   left: 15,
  //   width: 60,
  //   height: 60,
  //   borderRadius: 30,
  //   backgroundColor: "red",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderWidth: 1,
  //   borderColor: "white",
  // },
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
  text: { color: "#6AAF84", fontSize: 20, fontWeight: "bold" },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    // minWidth: 250,
    alignSelf: "flex-start",
    textAlignVertical: "bottom",
    fontSize: 18,
    fontWeight: "bold",
    color: "#6AAF84",
  },
});
