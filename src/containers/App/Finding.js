import { Layout, Card } from "@ui-kitten/components";
import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

export default function Finding() {
  return (
    <View style={{ paddingVertical: 24, flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, color: "#96ABE5" }}>ABC</Text>
          <Text>Điểm thi THPTQG</Text>
        </View>
        <View style={{ flex: 2 }} />
      </View>
      <View style={{ flex: 9 }}>
        <View style={styles.textInput}>
          <TextInput
            style={{
              height: 50,
              width: 340,
            }}
            placeholder="Tìm kiếm (MSHS - Năm thi)"
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
