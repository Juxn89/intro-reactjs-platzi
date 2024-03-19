import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
	EmptyTodos,
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
	const navigate = useNavigate()
	const {loading, error, searchedTodos, completeToDo, deleteToDo } = useContext(TodoContext)

	return (
		<>
			<TodoCounter />
			<TodoSearch />
			
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
							handleEdit={ () => navigate(`/edit/${todo.id}`) }
						/>
					))
				}
			</TodoList>

			<CreateTodoButton onClick={ () => navigate('/new') } />
		</>
	)
}