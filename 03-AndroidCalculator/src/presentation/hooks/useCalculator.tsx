import React, {useState} from 'react';

export const useCalculator = () => {
  const [number, setNumber] = useState('0');

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;
    setNumber(number + numberString);
  };
  return {
    // Properties
    number,

    // Methods
    buildNumber,
  };
};
