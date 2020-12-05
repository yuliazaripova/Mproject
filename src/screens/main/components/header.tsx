import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAlignJustify,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <FontAwesomeIcon icon={faAlignJustify} style={styles.icon} size={20} />
      <Text style={styles.text}>Ecommerce store</Text>
      <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignContent: 'center',
  },
  icon: {
    color: 'white',
  },
  text: {
    color: 'white',
    textTransform: 'capitalize',
    fontStyle: 'italic',
    fontSize: 18,
    lineHeight: 20,
  },
});

export default Header;
