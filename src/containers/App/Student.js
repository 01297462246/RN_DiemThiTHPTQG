import { Layout, Card } from "@ui-kitten/components";
import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
export default function Student() {
  return (
    <View style={{ paddingVertical: 24, flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 2, justifyContent: "center", marginLeft: 10 }}>
          <Text style={{ fontSize: 20, color: "#96ABE5" }}>
            DANH SÁCH HỌC SINH
          </Text>
        </View>
        <View style={{ flex: 1,justifyContent: "center", alignItems: 'flex-end', marginRight: 10 }}>
          <MaterialCommunityIcons name="plus" size={24} />
        </View>
      </View>
      <View style={{ flex: 9 }}>
        <View style={styles.textInput}>
          <TextInput
            style={{
              height: 50,
              width: 340,
            }}
            placeholder="Tìm kiếm (MSHS - Tên học sinh)"
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
                source={require("../../assets/user.png")}
                style={{ width: 50, height: 50 }}
              />
            </View>
            <View style={{ flex: 3 }}>
              <View>
                <Text>Trường:</Text>
              </View>
              <View>
                <Text>Mã học sinh:</Text>
              </View>
              <View>
                <Text>Tên học sinh:</Text>
              </View>
              <View>
                <Text>Năm thi:</Text>
              </View>
            </View>
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
