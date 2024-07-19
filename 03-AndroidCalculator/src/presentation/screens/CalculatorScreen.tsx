import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => console.log('C')}
          label="C"
          blackText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => console.log('+/-')}
          label="+/-"
          blackText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => console.log('del')}
          label="del"
          blackText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => console.log('÷')}
          label="÷"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => console.log('7')}
          label="7"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('8')}
          label="8"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('9')}
          label="9"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('X')}
          label="X"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => console.log('4')}
          label="4"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('5')}
          label="5"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('6')}
          label="6"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('-')}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => console.log('1')}
          label="1"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('2')}
          label="2"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('3')}
          label="3"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('+')}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => console.log('0')}
          label="0"
          doubleSize
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('.')}
          label="."
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('=')}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};
