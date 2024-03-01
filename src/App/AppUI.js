import { 
  CreateTodoButton ,
  TodoItem,
  TodoList,
  TodoSearch,
  TodoCounter
} from '../components';

export const AppUI = (props) => {
	const {total, totalCompleted, searchValue, setSearchValue, searchedTodos, completeToDo, deleteToDo} = props;
	
	return (
    <>
      <TodoCounter total={ total } totalCompleted= { totalCompleted } />
      <TodoSearch searchValue={ searchValue } setSearchValue={ setSearchValue } />

      <TodoList>
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