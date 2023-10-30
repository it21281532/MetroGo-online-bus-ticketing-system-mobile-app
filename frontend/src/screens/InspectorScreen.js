import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import inspector from "../../assets/images/inspector.png";

const InspectorScreen = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <View>
          <Image
            source={inspector}
            style={{ width: 427, height: 610, alignContent: "center" }}
          ></Image>
          <Pressable
            onPress={() => {
              nav.navigate("qr");
            }}
            style={{
              width: 200,
              backgroundColor: "#6BC5E8",
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Scan
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InspectorScreen;

const styles = StyleSheet.create({});
