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
import {FlexDirectionScreen} from './src/presentation/screens/FlexDirectionScreen';
import {HomeworkScreen} from './src/presentation/screens/HomeworkScreen';
import {HomeworkScreen1} from './src/presentation/screens/Homework/HomeScreen1';
import {HomeworkScreen2} from './src/presentation/screens/Homework/HomeScreen2';
import {HomeworkScreen3} from './src/presentation/screens/Homework/HomeScreen3';
import {HomeworkScreen4} from './src/presentation/screens/Homework/HomeScreen4';
import {HomeworkScreen5} from './src/presentation/screens/Homework/HomeScreen5';
import {HomeworkScreen6} from './src/presentation/screens/Homework/HomeScreen6';
import {HomeworkScreen7} from './src/presentation/screens/Homework/HomeScreen7';
import {HomeworkScreen8} from './src/presentation/screens/Homework/HomeScreen8';
import {HomeworkScreen9} from './src/presentation/screens/Homework/HomeScreen9';
import {HomeworkScreen10} from './src/presentation/screens/Homework/HomeScreen10';

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
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}
        {/* <HomeworkScreen /> */}
        {/* <HomeworkScreen1 /> */}
        {/* <HomeworkScreen2 /> */}
        {/* <HomeworkScreen3 /> */}
        {/* <HomeworkScreen4 /> */}
        {/* <HomeworkScreen5 /> */}
        {/* <HomeworkScreen6 /> */}
        {/* <HomeworkScreen7 /> */}
        {/* <HomeworkScreen8 /> */}
        {/* <HomeworkScreen9 /> */}
        <HomeworkScreen10 />
      </SafeAreaView>
    </PaperProvider>
  );
};
