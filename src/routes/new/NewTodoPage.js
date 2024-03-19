import { useContext } from 'react'
import { TodoForm } from '../../components/'
import { TodoContext } from '../../context/TodoContext'

export const NewTodoPage = () => {
	const { addTodo } = useContext(TodoContext)
	return(
		<>
			<TodoForm
				title={ 'Write your new ToDo' }
				submiteText={ 'Add' }
				submitEvent={ (todoName) => { addTodo(todoName) } }
			/>
		</>
	)
}