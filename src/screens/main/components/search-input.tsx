import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

const SearchInput: React.FC = () => {
  return (
    <View style={styles.search}>
      
      <TextInput
        style={styles.input}
        placeholder="Search for products"
        left={
          <TextInput.Icon
            name={<FontAwesomeIcon icon={faSearch} style={styles.icon} />} // where <Icon /> is any component from vector-icons or anything else
            onPress={() => {}}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'blue',
    paddingTop: 20,
    
    paddingRight: 20,
    paddingBottom: 50,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    borderRadius: 5,
  },
  icon: {
    color: 'grey',
    paddingLeft: 10,
  },
});

export default SearchInput;
