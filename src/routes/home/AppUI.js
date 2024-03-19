import { useContext } from 'react'
import { 
	EmptyTodos,
	Modal,
	TodoForm,
	TodosError,
	TodosLoading,
	CreateTodoButton,
	TodoCounter,
	TodoItem,
	TodoList,
	TodoSearch,
} from '../../components'
import { TodoContext } from '../../context/TodoContext'

export const AppUI = () => {
	// const { loading, error, searchedTodos, completeToDo, deleteToDo } = useContext(TodoContext);
	const { openModal } = useContext(TodoContext)

	return (
		<>
			<TodoCounter />
			<TodoSearch />

			<TodoContext.Consumer>
				{ ({loading, error, searchedTodos, completeToDo, deleteToDo, editToDo}) => (
					<TodoList>
						{ loading &&
							<>					
								<TodosLoading /> 
								<TodosLoading /> 
								<TodosLoading /> 
							</>
						}
						{ error && <TodosError /> }
						{
							(!loading && searchedTodos.length === 0) && <EmptyTodos />
						}
						{
							searchedTodos.map(todo => (
								<TodoItem 
									key={todo.id} 
									name={ todo.name } 
									completed={ todo.completed } 
									handleComplete={ () => completeToDo(todo.id) } 
									handleDetele={ () => deleteToDo(todo.id) }
									handleEdit={ () => editToDo(todo.id) }
								/>
							))
						}
					</TodoList>					
				)}
			</TodoContext.Consumer>

			<CreateTodoButton />

			{
				openModal && (
					<Modal>
						<TodoForm />
					</Modal>
				)
			}
		</>
	)
}