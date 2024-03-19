import { TodoForm } from '../../components/'

export const EditTodoPage = () => {
	return(
		<>
			<TodoForm
				title={ 'Update this ToDo' }
				submiteText={ 'Update' }
				submitEvent={ () => {  } }
			/>
		</>
	)
}