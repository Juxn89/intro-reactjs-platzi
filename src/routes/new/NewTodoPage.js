import { TodoForm } from '../../components/'

export const NewTodoPage = () => {
	return(
		<>
			<TodoForm
				title={ 'Write your new ToDo' }
				submiteText={ 'Add' }
				submitEvent={ () => {  } }
			/>
		</>
	)
}