import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Fabián Blanco Wuest" /> */}
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
