//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import Home from '../Screens/Home/Home';
import SingleScreen from '../Screens/Post/SingleScreen';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const AppStack = () => {
  // const { login_status } = useSelector(state => state.User)
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="SingleScreen" component={SingleScreen} />

    </Stack.Navigator>
  );
};

export default AppStack;
