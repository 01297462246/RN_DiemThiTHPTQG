import { Layout, Card } from "@ui-kitten/components";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import * as ROUTE from "../../../constants/routes";
export default function ExamYear(props) {
  return (
    <View style={{ paddingVertical: 24, flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 2, justifyContent: "center", marginLeft: 10 }}>
          <Text style={{ fontSize: 20, color: "#96ABE5" }}>
            DANH SÁCH NĂM THI
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate(ROUTE.ADDYEAR)}
          >
            <MaterialCommunityIcons name="plus" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 9 }}>
        <View style={styles.textInput}>
          <TextInput
            style={{
              height: 50,
              width: 340,
            }}
            placeholder="Tìm kiếm (Năm thi)"
          />
        </View>
        <Card style={styles.card}>
          <View style={{ margin: 10, flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../../assets/calendar.png")}
                style={{ width: 30, height: 30 }}
              />
            </View>
            <View style={{ flex: 3, justifyContent: "center" }}>
              <View>
                <Text>Năm thi:</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => console.log("1")}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <Ionicons name="trash-outline" size={24} />
              </View>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: 370,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: "black",
    marginHorizontal: 10,
    paddingLeft: 10,
    marginVertical: 5,
    color: "black",
    backgroundColor: "#E1E1E1",
    flexDirection: "row",
  },
  card: {
    margin: 10,
  },
});
