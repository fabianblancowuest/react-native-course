import {StyleSheet, Text, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Position Screen</Text> */}
      <View style={styles.greenBox}></View>
      <View style={styles.purpleBox}></View>
      <View style={styles.orangeBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 150,
    // width: 300,
    backgroundColor: '#28c4d9',
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'relative',
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'aliceblue',
  },

  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856d6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  greenBox: {
    flex: 1,
    // width: '100%',
    // height: 100,
    backgroundColor: '#3bf07a',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
