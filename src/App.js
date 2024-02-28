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
	const [searchValue, setSearchValue] = useState('');
	const [todos, setTodos] = useState(defaultTodos);

	const total = todos.length
	const totalCompleted = todos.filter(todos => !!todos.completed).length

  return (
    <>
      <TodoCounter total={ total } totalCompleted= { totalCompleted } />
      <TodoSearch searchValue={ searchValue } setSearchValue={ setSearchValue } />

      <TodoList>
        {
          todos.map(todo => (
            <TodoItem key={todo.id} name={ todo.name } completed={ todo.completed }/>
          ))
        }
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
