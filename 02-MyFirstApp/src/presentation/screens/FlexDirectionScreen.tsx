import {StyleSheet, View} from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39d4d4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    top: -100,
    backgroundColor: '#5856d6',
  },
  box2: {
    backgroundColor: '#4240a2',
  },
  box3: {
    top: 100,
    backgroundColor: '#2e2d71',
  },
});
