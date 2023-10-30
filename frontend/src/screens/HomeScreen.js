import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PRIMARYCOLOR, PRIMARYBORDERADIUS } from "../../Constants.js";
import { Ionicons } from "@expo/vector-icons";
import { CustomCard } from "../components/CustomCard.js";
import bus from "../../assets/images/bus.png";

export const HomeScreen = () => {
  const nav = useNavigation();
  const DATA = [
    {
      id: 1,
      name: "MetroGo",
      backgroundColor: "#6BC5E8",
      imagesrc: bus,
      onPressHandler: () => {
        nav.navigate("schedule", {
          title: "MetroGo",
          imagesrc: bus,
          backgroundColor: "#6BC5E8",
        });
      },
    },
  ];
  const transportItem = ({ item }) => {
    return (
      <CustomCard>
        <View
          style={{
            flexDirection: "row",
            overflow: "hidden",
            justifyContent: "space-between",
            padding: 15,
            backgroundColor: item.backgroundColor,
            marginHorizontal: 26,
            marginBottom: 10,
            borderRadius: 10,
          }}
        >
          <View style={{ justifyContent: "space-between" }}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              {item.name}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                width: 70,
                padding: 5,
                borderRadius: 6,
                marginTop: 50,
              }}
              onPress={item.onPressHandler}
            >
              <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                Select
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={{ position: "absolute", right: -15, bottom: 2 }}
              source={item.imagesrc}
            ></Image>
          </View>
        </View>
      </CustomCard>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.topview}>
        <View style={styles.welcomecontainer}>
          <Text style={styles.welcomemessage}>
            {"Hello,<br/>Sahan".split("<br/>").join("\n")}
          </Text>
          <Pressable
            onPress={() => {
              nav.navigate("ins");
            }}
          >
            <View style={styles.circle}></View>
          </Pressable>
        </View>
        <Text style={{ color: "#fff" }}> Where will you go</Text>
        <View style={styles.searchbar}>
          <Ionicons
            name="search-outline"
            size={25}
            color="#BEBEBE"
            style={{ width: 40, transform: [{ rotateY: "180deg" }] }}
          />
          <TextInput
            placeholder="Search"
            style={{
              color: "#BEBEBE",
              marginLeft: 15,
              opacity: 0.5,
              fontSize: 20,
            }}
          ></TextInput>
        </View>
      </View>
      <View style={styles.bottomview}>
        <CustomCard
          elevated={true}
          style={{
            backgroundColor: "#fff",
            marginHorizontal: 24,
            marginTop: -40,
            padding: 30,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Balance
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Rs. 600</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Rewards
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Rs. 10.25</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Total Trips
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>189</Text>
          </View>
        </CustomCard>
        <Text
          style={{
            marginHorizontal: 26,
            marginVertical: 20,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Transport
        </Text>
        <View>
          <FlatList
            data={DATA}
            renderItem={transportItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topview: {
    marginTop: 60,
    marginHorizontal: 24,
    backgroundColor: PRIMARYCOLOR,
    flex: 1,
    justifyContent: "space-between",
  },
  welcomemessage: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
  },
  searchbar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    height: 40,
    borderRadius: 10,
    marginBottom: 65,
  },
  circle: {
    borderRadius: 25,
    height: 50,
    width: 50,
    backgroundColor: "#fff",
  },
  welcomecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomview: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  container: {
    flex: 1,
    backgroundColor: PRIMARYCOLOR,
  },
});
