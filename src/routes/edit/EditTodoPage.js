import { useContext } from 'react'
import { TodoForm } from '../../components/'
import { TodoContext } from '../../context/TodoContext'
import { useParams } from 'react-router-dom'

export const EditTodoPage = () => {
	const { id } = useParams()
	const { editToDo, todos } = useContext(TodoContext)
	const todoName = todos.find(todo => todo.id === id).name

	return(
		<>
			<TodoForm
				title={ 'Update this ToDo' }
				submiteText={ 'Update' }
				todoName={ todoName }
				submitEvent={ (todoName) => { editToDo(id, todoName) } }
			/>
		</>
	)
}