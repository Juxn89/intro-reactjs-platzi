import { AppUI } from './AppUI'
import './App.css'
import { TodoProvider } from '../context/TodoContext'

function App() {

	return(
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	)
}

export default App
