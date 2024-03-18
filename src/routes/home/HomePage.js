import { AppUI } from './AppUI'
import { TodoProvider } from '../../context/TodoContext'
import './App.css'

export const HomePage = () => {
	return(
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	)
}