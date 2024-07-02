import useCounter from "../hooks/useCounter";

const CounterWithHook = () => {
	const { count, setCounter, reset } = useCounter({});

	return (
		<>
			<h3>
				Contador: <small>{count}</small>
			</h3>

			<div>
				<button
					onClick={() => {
						setCounter(-1);
					}}
				>
					-1
				</button>
				&nbsp;
				<button onClick={reset}>Reset</button>
				&nbsp;
				<button
					onClick={() => {
						setCounter(+1);
					}}
				>
					+1
				</button>
			</div>
		</>
	);
};

export default CounterWithHook;
