import React from 'react';
import {View, Text, KeyboardAvoidingView, SafeAreaView, ScrollView, Platform} from 'react-native';
import InputList from '../../components/input-list';
import SignBtn from '../../components/sign-btn';
import SignView from '../../components/sign-view';
import BottomBtn from '../../components/bottom-btn';
import styles from '../styles';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../components/logo';
import BackButton from '../../../common/back-btn';
import { StatusBar } from 'react-native';

interface inputItem {
  inputPlaceholder: string;
  type: 'email' | 'name' | 'password';
}

const Password = () => {
  const data: inputItem[] = [
    { inputPlaceholder: 'Email Address', type: 'email' },
  ];
  const behavior = Platform.OS === "android" ? undefined : "padding"
  return (
  
      <LinearGradient
              colors={['#e6e6fa', '#d8bfd8', '#ffffff']}
              style={styles.linearGradient}>
        <StatusBar translucent={true} backgroundColor={"transparent"}/>
        <View style={styles.container}>
          <KeyboardAvoidingView style={styles.KeyboardAvoidingView} behavior={behavior}>
            <ScrollView style={styles.scrollView}>
              <BackButton/>
              <Logo />
              <Text style={styles.passwordText}>
                Enter your email id and we will send you an email to change the
                password
              </Text>
              <InputList data={data} />
            </ScrollView>
            <SignBtn text="SUBMIT" />
          </KeyboardAvoidingView>
        </View>
      </LinearGradient>
   
  );
};

export default Password;
