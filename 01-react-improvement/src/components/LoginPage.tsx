import { useAuthStore } from "../store/auth.store";

export const LoginPage = () => {
	const authStatus = useAuthStore((state) => state.status);

	return (
		<>
			<h3>LoginPage</h3>

			{authStatus}
		</>
	);
};
