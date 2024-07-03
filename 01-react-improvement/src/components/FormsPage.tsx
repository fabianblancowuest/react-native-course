import { useForm } from "react-hook-form";

type FormInputs = {
	email: string;
	password: string;
};

export default function FormsPage() {
	const { register } = useForm<FormInputs>({
		defaultValues: {
			email: "fernando@gmail.com",
			password: "Acb123",
		},
	});

	return (
		<form>
			<h3>Formularios</h3>
			<div>
				<input
					className="formInput"
					type="text"
					placeholder="Email"
					{...register("email")}
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
	);
}
