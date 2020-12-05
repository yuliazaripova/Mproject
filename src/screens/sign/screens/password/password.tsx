import React from 'react';
import {View, Text} from 'react-native';
import InputList from '../../components/input-list';
import SignBtn from '../../components/sign-btn';
import SignView from '../../components/sign-view';
import BottomBtn from '../../components/bottom-btn';
import styles from '../styles';
import {useNavigation} from '@react-navigation/native';

interface inputItem {
  inputPlaceholder: string;
  type: 'email' | 'name' | 'password';
}

const Password = () => {
  const data: inputItem[] = [
    {inputPlaceholder: 'Email Address', type: 'email'},
  ];

  return (
    <SignView renderBackBtn={true}>
      <View style={styles.login}>
        <Text style={styles.passwordText}>
          Enter your email id and we will send you an email to change the
          password
        </Text>
        <InputList data={data} />
        <SignBtn text="SUBMIT" />
      </View>
    </SignView>
  );
};

export default Password;
