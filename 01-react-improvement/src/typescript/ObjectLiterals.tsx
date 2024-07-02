interface Person {
	firstName: string;
	lastName: string;
	age: number;
	address: Address;
	isAlive?: boolean;
}

interface Address {
	country: string;
	houseNo: number;
}

const ObjectsLiteral = () => {
	const person: Person = {
		age: 37,
		firstName: "Fernando",
		lastName: "Herrera",
		isAlive: undefined,
		address: {
			country: "Canada",
			houseNo: 615,
		},
	};

	return (
		<>
			<h3>Objetos Literales</h3>
			<pre>{JSON.stringify(person, null, 10)}</pre>
		</>
	);
};

export default ObjectsLiteral;
