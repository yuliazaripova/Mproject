import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

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
    backgroundColor: '#00BFFF',
    padding: 10,
    margin: 10,
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default SignBtn;
