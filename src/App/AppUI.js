import { 
	EmptyTodos,
	TodosError,
	TodosLoading,
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from '../components';

export const AppUI = (props) => {
	const { total, totalCompleted, searchValue, setSearchValue, searchedTodos, completeToDo, deleteToDo, loading, error } = props;
	
	return (
    <>
      <TodoCounter total={ total } totalCompleted= { totalCompleted } />
      <TodoSearch searchValue={ searchValue } setSearchValue={ setSearchValue } />

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
							handleComplete={ () => {completeToDo(todo.id) } } 
							handleDetele={ () => deleteToDo(todo.id) }
						/>
          ))
        }
      </TodoList>

      <CreateTodoButton />
    </>
  );
}