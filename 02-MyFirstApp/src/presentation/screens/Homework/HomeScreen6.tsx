import React from 'react';
import {StyleSheet, View} from 'react-native';

export const HomeworkScreen6 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]}></View>
      <View style={[styles.box, styles.orangeBox]}></View>
      <View style={[styles.box, styles.blueBox]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
    // Todo: Tarea
  },
  box: {
    width: '100%',
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    flex: 1,
    backgroundColor: '#5856d6',
  },
  orangeBox: {
    flex: 1,
    backgroundColor: '#F0A23B',
  },
  blueBox: {
    flex: 2,
    backgroundColor: '#28c4d9',
  },
});