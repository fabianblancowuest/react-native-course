import axios from "axios";
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

export {loadUsers}