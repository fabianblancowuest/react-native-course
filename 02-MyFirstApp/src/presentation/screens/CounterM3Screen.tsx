import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../theme/global.styles';
import {FAB} from 'react-native-paper';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <FAB
        label="Incrementar"
        style={globalStyles.fab}
        onPress={() => setCount(count + 1)}
        onLongPress={() => {
          setCount(0);
        }}
      />
    </View>
  );
};
