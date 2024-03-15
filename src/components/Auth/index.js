import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const AuthRoute = (props) => {
	const auth = useAuth()
	const { children } = props

	if(!auth.user)
		return <Navigate to={ '/login' } />

	return children
}