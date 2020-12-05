import * as React from 'react';
import {TouchableHighlight, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

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
    width: 30,
    height: 30,
    padding: 10,
  },
  icon: {
    color: 'black',
    padding: 10,
  },
});

export default BackButton;
