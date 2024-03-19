import { HashRouter, Route, Routes } from 'react-router-dom'
import { EditTodoPage, HomePage, NewTodoPage } from '../routes'
import { TodoProvider } from '../context/TodoContext'

function App() {
	return(
		<HashRouter>
			<TodoProvider>
				<Routes>
					<Route path='/' element={ <HomePage /> } />
					<Route path='/new' element={ <NewTodoPage /> } />
					<Route path='/edit/:id' element={ <EditTodoPage /> } />
					<Route path='*' element={ <h1>Not found</h1> } />
				</Routes>				
			</TodoProvider>
		</HashRouter>
	)
}

export default App
