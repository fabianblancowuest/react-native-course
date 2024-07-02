const BasicTypes = () => {
	const name: string = "Fernando";
	const age: number = 37;
	const isActive: boolean = true;

	const powers: string[] = ["React", "React Native", "Angular", "Vue", "Qwik"];
	return (
		<>
			<h3>Tipos básicos</h3>
			{name} {age} {isActive}
			<ul>
				{powers.map((item) => (
					<li>{item}</li>
				))}
			</ul>
		</>
	);
};

export default BasicTypes;
