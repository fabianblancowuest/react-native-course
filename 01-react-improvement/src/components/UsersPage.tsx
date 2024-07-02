import axios from "axios";
import { useEffect, useState } from "react";
import type { ReqResUserListResponse, User } from "../interfaces";

const loadUsers = async (): Promise<User[]> => {
	try {
		const { data } = await axios.get<ReqResUserListResponse>(
			"https://reqres.in/api/users",
		);

		return data.data;
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const UsersPage = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		loadUsers().then(setUsers);
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
					{users.map((user, index) => {
						return <UsersRow key={index} user={user}></UsersRow>;
					})}
				</tbody>
			</table>
		</>
	);
};

interface Props {
	user: User;
}

export const UsersRow = ({ user }: Props) => {
	const { avatar, first_name, last_name, email } = user;

	return (
		<tr>
			<td>
				<img src={avatar} alt="User Avatar" />
			</td>
			<td>
				{first_name} {last_name}
			</td>
			<td>{email}</td>
		</tr>
	);
};
