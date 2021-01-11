import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Formik } from "formik";
const { width, height } = Dimensions.get("screen");
import { Button } from "@ui-kitten/components";
import { PropsService } from "@ui-kitten/components/devsupport";
import * as ROUTE from '../../constants/routes'

const LoginScreen = (props) => {
  console.log(props.navigation);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }} />
      <View style={{ flex: 8 }}>
        <ImageBackground
          source={require("../../assets/logo.png")}
          style={{ width: width, height: 100 }}
          resizeMode="center"
        />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 50,
            }}
          >
            ABC
          </Text>
          <Text>Điểm thi THPTQG</Text>
        </View>
        <View
          style={[
            styles.square,
            {
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
            },
          ]}
        >
          <Text
            style={{
              fontSize: 15,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            Login
          </Text>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <View style={{ marginBottom: 10 }}>
                  <View style={styles.textInput}>
                    <Image
                      source={require("../../assets/user.png")}
                      style={{ width: 20, height: 20, margin: 15 }}
                    />
                    <TextInput
                      // style={styles.textInput}
                      style={{
                        height: 50,
                        width: 340,
                      }}
                      placeholder="Username"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                    />
                  </View>
                  <View style={styles.textInput}>
                    <Image
                      source={require("../../assets/password.png")}
                      style={{ width: 20, height: 20, margin: 15 }}
                    />
                    <TextInput
                      // style={styles.textInput}
                      style={{
                        height: 50,
                        width: 340,
                      }}
                      placeholder="Password"
                      secureTextEntry={true}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    />
                  </View>
                </View>
                <View style={{ marginBottom: 10 }}>
                  <TouchableOpacity onPress={() => props.navigation.navigate(ROUTE.SIGNUP)}>
                    <Text>Đăng kí tài khoản?</Text>
                  </TouchableOpacity>
                </View>
                <Button
                  onPress={() => props.navigation.replace(ROUTE.HOME)}
                  appearance="filled"
                  style={{ marginBottom: 20 }}
                >
                  Đăng nhập
                </Button>
              </>
            )}
          </Formik>
        </View>
      </View>
      <View style={{ flex: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "black",
    margin: 15,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    width: 340,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "black",
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    color: "black",
    backgroundColor: "#E1E1E1",
    flexDirection: "row",
  },
});

export default LoginScreen;
