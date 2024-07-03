import axios from "axios";
import { useEffect, useRef, useState } from "react";
import type { ReqResUserListResponse, User } from "../interfaces";

const loadUsers = async (page: number = 1): Promise<User[]> => {
	try {
		const { data } = await axios.get<ReqResUserListResponse>(
			"https://reqres.in/api/users",
			{
				params: {
					page: page,
				},
			},
		);

		return data.data;
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const UsersPage = () => {
	const [users, setUsers] = useState<User[]>([]);
	const currentPageRef = useRef(1);

	useEffect(() => {
		loadUsers(currentPageRef.current).then(setUsers);
	}, []);

	const nextPage = async () => {
		currentPageRef.current++;

		const users = await loadUsers(currentPageRef.current);

		if (users.length > 0) {
			setUsers(users);
		} else {
			currentPageRef.current--;
		}
		loadUsers(currentPageRef.current);
		console.log(currentPageRef.current);
	};

	const prevPage = async () => {
		if (currentPageRef.current <= 1) {
			return;
		}
		currentPageRef.current--;

		const users = await loadUsers(currentPageRef.current);

		setUsers(users);
	};
	return (
		<>
			<h3>Usuarios:</h3>
			<table>
				<thead className="userColumnTitle">
					<tr>
						<th>Avatar</th>
						<th>Nombre</th>
						<th>Email</th>
					</tr>
				</thead>

				<tbody className="usersInfo">
					{users.map((user, index) => {
						return <UsersRow key={index} user={user}></UsersRow>;
					})}
				</tbody>
			</table>

			<div className="buttons">
				<button
					className="btn-1"
					onClick={prevPage}
					disabled={currentPageRef.current <= 1}
				>
					Prev
				</button>
				<button className="btn-2" onClick={nextPage}>
					Next
				</button>
			</div>
		</>
	);
};

interface Props {
	user: User;
}

export const UsersRow = ({ user }: Props) => {
	const { avatar, first_name, last_name, email } = user;

	return (
		<tr className="userInfo">
			<td className="userColumn">
				<img src={avatar} alt="User Avatar" />
			</td>
			<td className="userColumn">
				{first_name} {last_name}
			</td>
			<td className="userColumn">{email}</td>
		</tr>
	);
};
