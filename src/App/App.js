import { HashRouter, Route, Routes } from 'react-router-dom'
import { EditTodoPage, HomePage, NewTodoPage } from '../routes'

function App() {
	return(
		<HashRouter>
			<Routes>
				<Route path='/' element={ <HomePage /> } />
				<Route path='/new' element={ <NewTodoPage /> } />
				<Route path='/edit/:id' element={ <EditTodoPage /> } />
				<Route path='*' element={ <h1>Not found</h1> } />
			</Routes>
		</HashRouter>
	)
}

export default App
