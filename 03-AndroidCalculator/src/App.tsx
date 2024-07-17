import React from 'react';
import type {PropsWithChildren} from 'react';
import {StatusBar, View} from 'react-native';
import {CalculatorScreen} from './presentation/screens/CalculatorScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App() {
  return (
    <View>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <CalculatorScreen />
    </View>
  );
}

export default App;
