import {useRef, useState} from 'react';

enum Operator {
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operator>;
  // Borrar todo
  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  // Borra último número
  const deleteOperation = () => {
    setNumber('0');

    if (number.length > 1) {
      setNumber(number.substring(0, number.length - 1));
    }

    if (number.length <= 2 && number.includes('-')) {
      setNumber('0');
    }
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  };
  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      // Evaluar si es otro cero y no hay punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      // Evaluar si es diferente de cero, no hay punto, y es el primer número
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      // Evitar 0000000.00
      if (numberString === ' 0' && !number.includes('.')) {
        return;
      }

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };
  const substractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.substract;
  };
  return {
    // Properties
    number,
    prevNumber,

    // Methods
    buildNumber,
    clean,
    toggleSign,
    deleteOperation,
    divideOperation,
    multiplyOperation,
    addOperation,
    substractOperation,
  };
};
