import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

interface IBottomBtn {
  text: string;
  onPress?: () => void;
}

const BottomBtn: React.FC<IBottomBtn> = ({text, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    color: 'blue',
  },
});

export default BottomBtn;
