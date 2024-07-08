import {Dimensions, StyleSheet, useWindowDimensions, View} from 'react-native';
import {Text} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

export const DimensionScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.purpleBox,
            width: width * 0.5,
          }}></View>
      </View>

      <Text style={styles.title}>
        w: {width.toFixed()} , h: {height.toFixed()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    backgroundColor: 'red',
    // flex: 1,
  },

  purpleBox: {
    backgroundColor: '#5856d6',
    height: '50%',
    width: '50%',
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
