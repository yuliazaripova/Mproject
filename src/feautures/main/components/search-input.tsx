import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import { LIGHT_GREY, MAIN_BLUE, WHITE } from '../../../assets/constants';

const SearchInput: React.FC = () => {
  return (
    <View style={styles.search}>
      
      <Input
        style={styles.input}
        placeholder="Search for products"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: MAIN_BLUE,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
  },
  input: {
    backgroundColor: WHITE,
    height: 40,
    borderRadius: 5,
    paddingLeft: 10,
  },
  icon: {
    color: LIGHT_GREY,
    paddingLeft: 10,
  },
});

export default SearchInput;
