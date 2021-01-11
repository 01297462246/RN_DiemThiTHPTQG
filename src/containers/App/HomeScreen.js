import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as ROUTE from "../../constants/routes";
import Finding from "./Finding";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import ExamYear from "./Year/ExamYear";
import Student from "./Student";
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTE.FINDING}
        component={Finding}
        options={{
          tabBarIcon: () => <Ionicons name="md-search" size={24} />,
        }}
      />
      <Tab.Screen
        name={ROUTE.YEAR}
        component={ExamYear}
        options={{
          tabBarIcon: () => <Ionicons name="md-calendar-outline" size={24} />,
        }}
      />
      <Tab.Screen
        name={ROUTE.STUDENT}
        component={Student}
        options={{
          tabBarIcon: () => <Ionicons name="md-people-outline" size={24} />,
        }}
      />
      <Tab.Screen
        name={ROUTE.SCHOOL}
        component={Finding}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="office-building" size={24} />,
        }}
      />
      <Tab.Screen
        name={ROUTE.SETTING}
        component={Finding}
        options={{
          tabBarIcon: () => <Ionicons name="settings-outline" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
