import { useState } from "react";

interface Options {
	initialValue?: number;
}

const useCounter = ({ initialValue = 0 }: Options) => {
	const [count, setCount] = useState<number>(initialValue);

	const setCounter = (value: number) => {
		const newValue = count + value;

		if (newValue >= 0) setCount(count + value);
	};

	const reset = () => {
		setCount(0);
	};

	return {
		// Properties
		count,

		// Methods
		setCounter,
		reset,
	};
};

export default useCounter;
