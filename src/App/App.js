import { HashRouter, Route, Routes } from 'react-router-dom'
import { Blog, BlogPost, Home, Menu, NotFound, Profile } from '../components'

function App() {	
	return(
		<>
			<HashRouter>
				<Menu />
				<Routes>
					<Route path='/' element={ <Home /> }/>

					<Route path='/blog' element={ <Blog /> }>
						<Route path=':slug' element={ <BlogPost /> }/>
					</Route>
					
					<Route path='/profile' element={ <Profile /> }/>
					<Route path='*' element={ <NotFound /> }/>
				</Routes>

				<footer></footer>
			</HashRouter>
		</>
	)
}

export { App };
