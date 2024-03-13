import { useAuth } from '../../hooks/useAuth'

export const Logout = () => {
	const auth = useAuth()

	const logout = (e) => {
		e.preventDefault();
		auth.logout()
	}

	return(
		<>
			<h1>Logout</h1>
			<form onSubmit={ logout }>
				<button type="submit">Logout</button>
			</form>
		</>
	)
}