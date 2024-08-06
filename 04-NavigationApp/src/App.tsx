import * as React from 'react';
import type {PropsWithChildren} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {globalStyles} from './config/theme/app-theme';
import {NativeScreenNavigationContainer} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App() {
  return (
    // <Navigation
    <NavigationContainer>
      <Text>App</Text>
    </NavigationContainer>
  );
}

export default App;
