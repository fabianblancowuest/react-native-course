import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState<number>(10);

	const add = (value: number) => {
		setCount(count + value);
	};

	const substract = (value: number) => {
		setCount(count - value);
	};

	const reset = () => {
		setCount(0);
	};

	return (
		<>
			<h3>
				Contador: <small>{count}</small>
			</h3>

			<div>
				<button
					onClick={() => {
						substract(1);
					}}
				>
					-1
				</button>
				&nbsp;
				<button onClick={reset}>Reset</button>
				&nbsp;
				<button
					onClick={() => {
						add(1);
					}}
				>
					+1
				</button>
			</div>
		</>
	);
};

export default Counter;
