import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../feautures/main/main';
import Login from '../feautures/auth/screens/login/login';
import Password from '../feautures/auth/screens/password/password';
import Registraiton from '../feautures/auth/screens/registration/registraiton';

const Stack = createStackNavigator();

const MainStack:React.FC = () => {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registraiton} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
    )
  }

export default MainStack;
