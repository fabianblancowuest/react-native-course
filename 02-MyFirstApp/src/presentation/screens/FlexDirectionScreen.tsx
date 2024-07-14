import {ScrollView, StyleSheet, View} from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box4]} />
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39d4d4',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row',
  },
  box: {
    // flex: 1,
    width: 100,
    height: 100,
  },
  box1: {
    // top: -100,
    backgroundColor: '#5856d6',
  },
  box2: {
    backgroundColor: '#4240a2',
    alignSelf: 'flex-end',
  },
  box3: {
    // top: 100,
    backgroundColor: '#2e2d71',
    // alignSelf: 'center',
  },
  box4: {
    backgroundColor: '#222155',
  },
});
