import React from 'react';
import {View, Text} from 'react-native';
import InputList from '../../components/input-list';
import SignBtn from '../../components/sign-btn';
import SignView from '../../components/sign-view';
import BottomBtn from '../../components/bottom-btn';
import styles from '../styles';
import {useNavigation} from '@react-navigation/native';
import SkipLoginBtn from '../../components/skip-login-btn';

interface inputItem {
  inputPlaceholder: string;
  type: 'email' | 'name' | 'password';
}

const Login = () => {
  const navigation = useNavigation();
  const data: inputItem[] = [
    {inputPlaceholder: 'Email Address', type: 'email'},
    {inputPlaceholder: 'Password', type: 'password'},
  ];

  return (
    <SignView>
      <View style={styles.login}>
        <InputList data={data} />
        <Text
          style={styles.right}
          onPress={() => navigation.navigate('Password')}>
          Forgot Password?
        </Text>
        <SignBtn text="SIGN IN" />
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('Registration')}>
          New here? Sign up
        </Text>
      </View>
      <SkipLoginBtn />
    </SignView>
  );
};

export default Login;
