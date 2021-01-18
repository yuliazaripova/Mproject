import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root:{
    flex:1,
  },
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  KeyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    paddingTop: 20,
    flex: 1,
  },
  text: {
    alignSelf: 'center',
    color: 'blue',
  },
  passwordText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
  login: {
    paddingTop: 50,
    flex: 2,
    justifyContent: 'space-between',
  },
  bottom: {
    flex: 1,
  },
  right: {
    alignSelf: 'flex-end',
    color: 'blue',
  },
});

export default styles;
