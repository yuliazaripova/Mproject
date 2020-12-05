import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import Login from './src/screens/sign/screens/login/login';
import Registraiton from './src/screens/sign/screens/registration/registraiton';
import Password from './src/screens/sign/screens/password/password';

import Main from './src/screens/main/main';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registraiton} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
