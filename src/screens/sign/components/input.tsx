import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

interface InputIProps {
  inputPlaceholder: string;
  type: 'email' | 'name' | 'password';
}

const Input: React.FC<InputIProps> = ({inputPlaceholder, type}) => {
  return (
    <TextInput
      style={styles.input}
      autoCompleteType={type}
      placeholder={inputPlaceholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    height: 40,
  },
});

export default Input;
