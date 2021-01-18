import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faSearch,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, DrawerActions, CommonActions } from '@react-navigation/native';
import BackButton from '../../common/back-btn';
import { MAIN_BLUE, WHITE } from '../../../assets/constants';

const Header: React.FC = () => {
    const navigation = useNavigation();
  
    return (
      <View style={styles.header}>
          <BackButton/>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <FontAwesomeIcon icon={faSearch} style={styles.icon} size={20}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} size={20} />
            </TouchableOpacity>
          </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    header: {
      paddingTop: 40,
      backgroundColor: MAIN_BLUE,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      alignContent: 'center',
    },
    icon: {
      marginTop: 10,
      color: WHITE,
    },
    iconContainer: {
      width: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  });
  
  export default Header;