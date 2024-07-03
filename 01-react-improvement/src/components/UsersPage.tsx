import { useUsers } from "../hooks/useUsers";
import { UsersRow } from "./userRow";

export const UsersPage = () => {
	const { nextPage, prevPage, users, currentPageRef } = useUsers();

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
