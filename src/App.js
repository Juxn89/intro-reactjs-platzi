import { useState } from 'react';
import { 
  CreateTodoButton ,
  TodoItem,
  TodoList,
  TodoSearch,
  TodoCounter
} from './components/';
import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage';
import { defaultTodos } from './data/todos';

function App() {
	const [todos, saveItem] = useLocalStorage('ToDo_v1', defaultTodos);
	const [searchValue, setSearchValue] = useState('');

	const total = todos.length
	const totalCompleted = todos.filter(todos => !!todos.completed).length

	const searchedTodos = todos.filter(todo => 
		todo.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
	)

	const completeToDo = (id) => {
		// const updatedListToDos = [...todos];
		// const todoToUpdateIndex = updatedListToDos.findIndex(todo => todo.id === id)
		// updatedListToDos[todoToUpdateIndex].completed = !updatedListToDos[todoToUpdateIndex].completed;

		const updatedListToDos = todos.map(todo => {
			if(todo.id === id)
				return { ...todo, completed: !todo.completed }
			return todo;
		})

		saveItem(updatedListToDos)
	}

	const deleteToDo = (id) => {
		const updatedListToDos = todos.filter(todo => todo.id !== id);

		saveItem(updatedListToDos)
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
