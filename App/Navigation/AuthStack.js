//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import Login from '../Screens/Auth/Login';
import SignIn from '../Screens/Auth/SignIn';
import SignUp from '../Screens/Auth/SignUp';
import Onboarding from '../Screens/Auth/Onboarding';
import NextScreen from '../Screens/Auth/NextScreen';
import NextScreenAnother from '../Screens/Auth/NextScreenAnother';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="NextScreen" component={NextScreen} />
            <Stack.Screen name="NextScreenAnother" component={NextScreenAnother} />

        </Stack.Navigator>
    );
};

export default AuthStack;
