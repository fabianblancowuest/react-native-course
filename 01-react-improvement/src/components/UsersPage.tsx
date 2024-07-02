import axios from "axios";
import { useEffect } from "react";

export const UsersPage = () => {
	useEffect(() => {
		axios
			.get("https://reqres.in/api/users?page=2")
			.then((response) => console.log(response.data.total));
	}, []);

	return (
		<>
			<h3>Usuarios:</h3>
			<table>
				<thead>
					<tr>
						<th>Avatar</th>
						<th>Nombre</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>avatar</td>
						<td>nombre</td>
						<td>email</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};
