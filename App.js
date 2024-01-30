import { StatusBar } from 'expo-status-bar';
import React from 'react';

import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAYw6F7OK3Piy1tV9gqVlmosPmOUzfEF7g",
  authDomain: "insta-clone-9a6a2.firebaseapp.com",
  projectId: "insta-clone-9a6a2",
  storageBucket: "insta-clone-9a6a2.appspot.com",
  messagingSenderId: "263071350712",
  appId: "1:263071350712:web:98ab955b451dc8a2bd194d",
  measurementId: "G-9M6WP2FF0P"
};

if(firebase.apps.length === 0){
  firebase.initializeApp()
}
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './my-app/components/auth/Landing';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName="Landing">
  <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}/>
</Stack.Navigator>
    </NavigationContainer>
  
  );
}


