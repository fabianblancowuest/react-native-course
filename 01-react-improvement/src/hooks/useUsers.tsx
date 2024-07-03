import { useState, useRef, useEffect } from "react";
import { loadUsers } from "../components";
import type { User } from "../interfaces";

export const useUsers = () => {
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

	return {
		// Properties
		users,
		currentPageRef,

		// Methods
		nextPage,
		prevPage,
	};
};
