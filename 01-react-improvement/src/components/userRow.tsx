import { User } from "../interfaces";

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
