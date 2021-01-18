import * as React from 'react';
import {TouchableHighlight, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { WHITE } from '../../assets/constants';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={styles.btn}
      onPress={() => {
        navigation.goBack();
      }}>
      <FontAwesomeIcon icon={faArrowLeft} style={styles.icon} size={20} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 8,
  },
  icon: {
    color: WHITE,
    padding: 8,
  },
});

export default BackButton;
