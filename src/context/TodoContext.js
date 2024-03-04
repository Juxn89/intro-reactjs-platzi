import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
	const { item: todos, saveItem, loading, error } = useLocalStorage('ToDo_v1', []);
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
		<TodoContext.Provider value={{ 
			todos, 
			saveItem, 
			loading, 
			error, 
			searchValue, 
			setSearchValue, 
			total, totalCompleted, 
			searchedTodos, 
			completeToDo, 
			deleteToDo 
		}}>
			{ children }
		</TodoContext.Provider>
	)
}

export { 
	TodoContext,
	TodoProvider
}