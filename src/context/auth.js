import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const navigate = useNavigate()
	const [user, setUser] = useState(null)

	const login = (userName) => {
		setUser({ userName })
		navigate('/profile')
	}
	
	const logout = () => {
		navigate('/')
		setUser(null)
	}

	const auth = { user, login, logout }

	return(
		<AuthContext.Provider value={ auth }>
			{ children }
		</AuthContext.Provider>
	)
}

export {
	AuthProvider,
	AuthContext
}