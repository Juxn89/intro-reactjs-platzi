import { useState } from 'react';
import { 
  CreateTodoButton ,
  TodoItem,
  TodoList,
  TodoSearch,
  TodoCounter
} from './components/';
import { defaultTodos } from './data/todos';
import './App.css';

function App() {
	const locaStorageToDo = localStorage.getItem('ToDo_v1')
	let parsedTodos = [];

	if(locaStorageToDo === null) {
		localStorage.setItem('ToDo_v1', JSON.stringify(defaultTodos))
		parsedTodos = defaultTodos
	}
	else
		parsedTodos = JSON.parse(locaStorageToDo)

	const [todos, setTodos] = useState(parsedTodos);
	const [searchValue, setSearchValue] = useState('');

	const total = todos.length
	const totalCompleted = todos.filter(todos => !!todos.completed).length

	const saveToDo = (newTodos) => {
		const jsonTodos = JSON.stringify(newTodos)
		localStorage.setItem('ToDo_v1', jsonTodos)
		setTodos(newTodos)
	}

	const searchedTodos = todos.filter(todo => 
		todo.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
	)

	const completeToDo = (id) => {
		const updatedListToDos = [...todos];
		const todoToUpdateIndex = updatedListToDos.findIndex(todo => todo.id === id)
		updatedListToDos[todoToUpdateIndex].completed = true;

		saveToDo(updatedListToDos)
	}

	const deleteToDo = (id) => {
		const updatedListToDos = todos.filter(todo => todo.id !== id);

		saveToDo(updatedListToDos)
	}

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

export default App;
