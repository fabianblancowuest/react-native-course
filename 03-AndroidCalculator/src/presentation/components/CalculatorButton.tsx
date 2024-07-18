import React from 'react';
import {Pressable, Text} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
}

export const CalculatorButton = ({label, color = colors.darkGray}: Props) => {
  return (
    <Pressable
      style={({pressed}) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
