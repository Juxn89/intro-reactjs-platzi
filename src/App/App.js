import { HashRouter, Route, Routes } from 'react-router-dom'
import { Blog, BlogPost, Home, Menu, NotFound, Profile, Login, Logout } from '../components'
import { AuthProvider } from '../context/auth'

function App() {	
	return(
		<>
			<HashRouter>
				<AuthProvider>
					<Menu />
					<Routes>
						<Route path='/' element={ <Home /> }/>

						<Route path='/blog' element={ <Blog /> }>
							<Route path=':slug' element={ <BlogPost /> }/>
						</Route>
						
						<Route path='/login' element={ <Login /> }/>
						<Route path='/logout' element={ <Logout /> }/>
						<Route path='/profile' element={ <Profile /> }/>
						<Route path='*' element={ <NotFound /> }/>
					</Routes>

					<footer></footer>					
				</AuthProvider>
			</HashRouter>
		</>
	)
}

export { App }
