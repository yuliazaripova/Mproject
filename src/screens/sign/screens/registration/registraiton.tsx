import React from 'react';
import {View, Text, Button, SectionList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import InputList from '../../components/input-list';
import SignBtn from '../../components/sign-btn';
import SignView from '../../components/sign-view';
import BottomBtn from '../../components/bottom-btn';
import BackButton from '../../../common/back-btn';
import styles from '../styles';

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

  return (
    <SignView renderBackBtn={true}>
      <View style={styles.login}>
        <InputList data={data} />
        <SignBtn text="SIGN UP" />
      </View>
      <BottomBtn
        text="Already have account? Sign in"
        onPress={() => navigation.navigate('Login')}
      />
    </SignView>
  );
};

export default Registraiton;
