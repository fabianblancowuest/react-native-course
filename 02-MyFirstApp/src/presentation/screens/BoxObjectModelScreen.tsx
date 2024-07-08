import {StyleSheet, Text, View} from 'react-native';
import {white} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Box Object Screen</Text> */}
      <View style={styles.purpleBox}>
        <Text style={{color: 'white', textAlign: 'center'}}>Hola Mundo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    // display: 'flex',
    fontSize: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },

  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    marginHorizontal: 20,
    marginVertical: 50,
    padding: 5,
    fontSize: 40,
  },
});
