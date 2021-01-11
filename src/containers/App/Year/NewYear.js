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
export default function NewYear(props) {
  return (
    <View style={{ paddingVertical: 24, flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 2, justifyContent: "center", marginLeft: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginRight: 20,
              }}
            >
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <MaterialCommunityIcons name="keyboard-backspace" size={24} />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 20, color: "#96ABE5" }}>THÊM NĂM THI</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
            marginRight: 15,
          }}
        >
          <Text>Thêm</Text>
        </View>
      </View>
      <View style={{ flex: 9 }}>
        <Card style={styles.card} >
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
          </View>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
});
