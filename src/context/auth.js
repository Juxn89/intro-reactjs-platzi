import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

const adminList = [ 'user_admin' ]

const AuthProvider = ({ children }) => {
	const navigate = useNavigate()
	const [user, setUser] = useState(null)

	const login = (userName) => {
		const isAdmin = adminList.find(admin => admin === userName)

		setUser({ userName, isAdmin })
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