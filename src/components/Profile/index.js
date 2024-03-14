import { useAuth } from '../../hooks/useAuth'

export const Profile = () => {
	const auth = useAuth()
	
	return(
		<>
			<h1>Profile</h1>
			<h2>Welcome, { auth.user.userName }</h2>
		</>
	)
}