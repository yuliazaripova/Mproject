import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import { onChange } from 'react-native-reanimated';
import {IInputItem} from '../types';

const Input: React.FC<IInputItem> = ({inputPlaceholder, type, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      autoCompleteType={type}
      placeholder={inputPlaceholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginVertical: 8,
  },
});

export default Input;
