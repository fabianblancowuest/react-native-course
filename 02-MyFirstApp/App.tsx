import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';
import {PaperProvider} from 'react-native-paper';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {BoxObjectModelScreen} from './src/presentation/screens/BoxObjectModelScreen';
import {DimensionScreen} from './src/presentation/screens/DimensionScreen';
import {PositionScreen} from './src/presentation/screens/PositionScreen';
import {FlexScreen} from './src/presentation/screens/FlexScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Fabián Blanco Wuest" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        <FlexScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
