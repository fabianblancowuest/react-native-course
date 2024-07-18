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
        <CalculatorButton label="C" color={colors.darkGray} />
        <CalculatorButton label="+/-" color={colors.darkGray} />
        <CalculatorButton label="del" color={colors.darkGray} />
        <CalculatorButton label="/" color={colors.orange} />
      </View>
    </View>
  );
};
