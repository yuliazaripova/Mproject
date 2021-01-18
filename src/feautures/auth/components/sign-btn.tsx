import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import { MAIN_BLUE, WHITE } from '../../../assets/constants';

interface ISignBtn {
  text: string;
  onPress?: () => void;
}

const SignBtn: React.FC<ISignBtn> = ({text, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: MAIN_BLUE,
    padding: 10,
    margin: 10,
  },
  text: {
    color: WHITE,
    textTransform: 'uppercase',
  },
});

export default SignBtn;
