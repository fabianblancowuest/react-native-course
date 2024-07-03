import { useForm } from "react-hook-form";

type FormInputs = {
	email: string;
	password: string;
};

export default function FormsPage() {
	const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
		defaultValues: {
			email: "fernando@gmail.com",
			password: "Acb123",
		},
	});

	const onSubmit = (myForm: FormInputs) => {
		console.log({ myForm });
	};

	console.log(watch("email"));

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h3>Formularios</h3>
				<div>
					<input
						className="formInput"
						type="text"
						placeholder="Email"
						{...register("email", { required: true })}
					/>
					<input
						className="formInput"
						type="text"
						placeholder="Password"
						{...register("password")}
					/>
					<button className="btn-form" type="submit">
						Ingresar
					</button>
				</div>
			</form>

			<pre>{JSON.stringify(formState, null, 2)}</pre>
		</>
	);
}
