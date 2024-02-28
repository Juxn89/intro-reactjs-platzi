import { useState } from 'react';
import { 
  CreateTodoButton ,
  TodoItem,
  TodoList,
  TodoSearch,
  TodoCounter
} from './components/';
import { defaultTodos } from './data/todos'
import './App.css';

function App() {
	const [todos, setTodos] = useState(defaultTodos);
	const [searchValue, setSearchValue] = useState('');

	const total = todos.length
	const totalCompleted = todos.filter(todos => !!todos.completed).length

	const searchedTodos = todos.filter(todo => 
		todo.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
	)

  return (
    <>
      <TodoCounter total={ total } totalCompleted= { totalCompleted } />
      <TodoSearch searchValue={ searchValue } setSearchValue={ setSearchValue } />

      <TodoList>
        {
          searchedTodos.map(todo => (
            <TodoItem key={todo.id} name={ todo.name } completed={ todo.completed }/>
          ))
        }
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
