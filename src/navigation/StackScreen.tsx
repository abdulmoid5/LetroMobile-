import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../screens/splash/Splash'

const Stack = createNativeStackNavigator();

const StackScreen = () => {
    <NavigationContainer>
       
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
 
    </NavigationContainer>
}

export default StackScreen;