import React, { useState, useEffect } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import axios from "axios";

const BusSheduleScreen = () => {
  const [userInput, setUserInput] = useState("");
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get(`http://192.168.1.101:8000/schedules`);
        setSchedules(response.data);
      } catch (error) {
        console.error("Error fetching schedules", error);
      }
    };

    fetchSchedules();
  }, []);

  const filterData = (item) => {
    // if the input is empty
    if (userInput === "") {
      return (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>
            <Ionicons name="ios-bus" size={24} color="#6BC5E8" /> {item.route}
          </Text>
          <Text style={styles.subText}>Day: {item.day}</Text>
          <Text style={styles.subText}>Time: {item.time}</Text>
        </View>
      );
    }
    // if the user has started searching
    if (item.name.toLowerCase().includes(userInput.toLowerCase())) {
      return (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}></View>

      <FlatList
        data={schedules}
        renderItem={({ item, index }) => filterData(item)}
        keyExtractor={(item) => item._id} // Assuming '_id' is the unique identifier in your MongoDB document
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6BC5E8",
  },
  searchContainer: {
    backgroundColor: "#6BC5E8",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7,
    backgroundColor: "white",
    borderRadius: 3,
    height: 38,
    flex: 1,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  searchInput: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    margin: 10,
    marginHorizontal: 15,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 6,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  subText: {
    fontSize: 14,
    color: "#555",
  },
});

export default BusSheduleScreen;
