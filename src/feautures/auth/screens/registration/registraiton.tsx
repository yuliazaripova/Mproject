import React from 'react';
import {View, Text, Button, SectionList, SafeAreaView, KeyboardAvoidingViewBase, KeyboardAvoidingView, ScrollView, Platform, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import InputList from '../../components/input-list';
import SignBtn from '../../components/sign-btn';
import SignView from '../../components/sign-view';
import BottomBtn from '../../components/bottom-btn';
import BackButton from '../../../common/back-btn';
import styles from '../styles';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../components/logo';

interface inputItem {
  inputPlaceholder: string;
  type: 'email' | 'name' | 'password';
}

const Registraiton = () => {
  const navigation = useNavigation();
  const data: inputItem[] = [
    {inputPlaceholder: 'Full Name', type: 'name'},
    {inputPlaceholder: 'Email Address', type: 'email'},
    {inputPlaceholder: 'Password', type: 'password'},
    {inputPlaceholder: 'Confirm Password', type: 'password'},
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
              <InputList data={data} />
          </ScrollView >
          <SignBtn text="SIGN UP" />
          <BottomBtn
            text="Already have account? Sign in"
            onPress={() => navigation.navigate('Login')}
          />
          </KeyboardAvoidingView>
        </View>
      </LinearGradient>

 
  );
};

export default Registraiton;
