import { useContext } from 'react'
import { TodoForm } from '../../components/'
import { TodoContext } from '../../context/TodoContext'
import { useLocation, useParams } from 'react-router-dom'

export const EditTodoPage = () => {
	const { id } = useParams()
	const location = useLocation()
	const { editToDo, loading, findToDo } = useContext(TodoContext)
	let todoName = ''

	if(location.state?.todo) {
		todoName = location.state.todo.name
	}
	else if(loading) {
		return(
			<>Loading...</>
		)
	}
	else {
		const { name } = findToDo(id)
		todoName = name
	}

	return(
		<>
			<TodoForm
				title={ 'Update this ToDo' }
				submiteText={ 'Update' }
				defaultTodoText={ todoName }
				submitEvent={ (todoName) => { editToDo(id, todoName) } }
			/>
		</>
	)	
}