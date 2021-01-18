import React from 'react';
import {View, Text, NativeSyntheticEvent, TextInputChangeEventData, SafeAreaView, Keyboard, KeyboardAvoidingViewBase, KeyboardAvoidingView, Platform, StatusBar} from 'react-native';
import InputList from '../../components/input-list';
import SignBtn from '../../components/sign-btn';
import SignView from '../../components/sign-view';
import BottomBtn from '../../components/bottom-btn';
import styles from '../styles';
import {useNavigation} from '@react-navigation/native';
import SkipLoginBtn from '../../components/skip-login-btn';
import { useDispatch, useSelector } from 'react-redux';
import { getPassword, getEmail } from '../../../../services/login/selectors';
import { setPassword, setEmail } from '../../../../services/login/actions';
import {IInputItem} from '../../types';
import { signIn } from '../../../../services/login/login';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Logo from '../../components/logo';
import LinearGradient from 'react-native-linear-gradient';
import { useKeyboardStatus } from '../../../../hooks/useKeyboard';


const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const email = useSelector(getEmail);
  const password = useSelector(getPassword);

  const onChangeEmail = React.useCallback((e) => {
    dispatch(setEmail(e))
  }, []);

  const onChangePassword = React.useCallback((e) => {
    dispatch(setPassword(e))
  }, []);

  const onPressSignIn = () => {
    signIn(email, password)
  }

  const data: IInputItem[] = [
    {inputPlaceholder: 'Email Address', type: 'email', onChangeText: onChangeEmail},
    {inputPlaceholder: 'Password', type: 'password', onChangeText: onChangePassword},
  ];
  const behavior = Platform.OS === "android" ? undefined : "padding"
  const isKeyboardVisible = useKeyboardStatus();
  return (
      
        <LinearGradient
                colors={['#e6e6fa', '#d8bfd8', '#ffffff']}
                style={styles.linearGradient}>
          <StatusBar translucent={true} backgroundColor={"transparent"}/>
          <View style={styles.container}>
          <KeyboardAvoidingView style={styles.KeyboardAvoidingView} behavior={behavior}>
            <ScrollView style={styles.scrollView}>
              <Logo />
              <InputList data={data} />
                <Text
                  style={styles.right}
                  onPress={() => navigation.navigate('Password')}>
                  Forgot Password?
                </Text>
              </ScrollView>
            </KeyboardAvoidingView>

          <SignBtn text="SIGN IN" onPress={onPressSignIn}/>
         
        {
          !isKeyboardVisible && 
          <>
            <Text
                style={styles.text}
                onPress={() => navigation.navigate('Registration')}>
                New here? Sign up
            </Text>
            <SkipLoginBtn />
          </>
        }

        </View>
      </LinearGradient>


  );
};

export default Login;
