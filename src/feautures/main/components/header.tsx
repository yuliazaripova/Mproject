import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAlignJustify,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, DrawerActions, CommonActions } from '@react-navigation/native';
import { MAIN_BLUE, WHITE } from '../../../assets/constants';

const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <FontAwesomeIcon icon={faAlignJustify} style={styles.icon} size={20}/>
      </TouchableOpacity>
      <Text style={styles.text}>Ecommerce store</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    backgroundColor: MAIN_BLUE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignContent: 'center',
  },
  icon: {
    color: 'white',
  },
  text: {
    color: WHITE,
    textTransform: 'capitalize',
    fontStyle: 'italic',
    fontSize: 18,
    lineHeight: 20,
  },
});

export default Header;
