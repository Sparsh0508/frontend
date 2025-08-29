import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Index from "./index";
import AnalysisPage from "./components/CropRecomendation";
import ChatScreen from "./ChatBot";

export type RootStackParamList = {
  Home: undefined;
  Analysis: undefined;
  ChatScreen: undefined; // ✅ Added here
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="Analysis" component={AnalysisPage} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
