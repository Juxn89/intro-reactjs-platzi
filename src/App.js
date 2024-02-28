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

	const completeToDo = (id) => {
		const updatedListToDos = [...todos];
		const todoToUpdateIndex = updatedListToDos.findIndex(todo => todo.id === id)
		updatedListToDos[todoToUpdateIndex].completed = true;

		setTodos(updatedListToDos)
	}

	const deleteToDo = (id) => {
		const updatedListToDos = todos.filter(todo => todo.id !== id);

		setTodos(updatedListToDos)
	}

  return (
    <>
      <TodoCounter total={ total } totalCompleted= { totalCompleted } />
      <TodoSearch searchValue={ searchValue } setSearchValue={ setSearchValue } />

      <TodoList>
        {
          searchedTodos.map(todo => (
            <TodoItem key={todo.id} id={ todo.id } name={ todo.name } completed={ todo.completed } handleComplete={ completeToDo } handleDetele={ deleteToDo }/>
          ))
        }
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
