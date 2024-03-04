import { 
  CreateTodoButton ,
  TodoItem,
  TodoList,
  TodoSearch,
  TodoCounter
} from '../components';

export const AppUI = (props) => {
	const { total, totalCompleted, searchValue, setSearchValue, searchedTodos, completeToDo, deleteToDo, loading, error } = props;
	
	return (
    <>
      <TodoCounter total={ total } totalCompleted= { totalCompleted } />
      <TodoSearch searchValue={ searchValue } setSearchValue={ setSearchValue } />

      <TodoList>
				{ loading && <p>We're loading...</p> }
				{ error && <p>Something went wrong</p> }
				{
					(!loading && searchedTodos.length === 0) && <p>Create your first ToDo!</p>
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