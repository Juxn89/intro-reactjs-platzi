import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
	const { item: todos, saveItem, loading, error } = useLocalStorage('ToDo_v1', [])
	const [searchValue, setSearchValue] = useState('')

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
			return todo
		})

		saveItem(updatedListToDos)
	}

	const deleteToDo = (id) => {
		const updatedListToDos = todos.filter(todo => todo.id !== id)

		saveItem(updatedListToDos)
	}

	const editToDo = (id, text) => {
		const todosListUpdated = todos.map(todo => {
			if(todo.id !== id) return todo

			todo.name = text
			console.log(todo)
			return todo
		})

		console.log(todosListUpdated)

		saveItem(todosListUpdated)
	}

	const addTodo = (newTodo) => {		
		const updatedListTodos = [...todos, { id: crypto.randomUUID(), name: newTodo, completed: false }]
		saveItem(updatedListTodos)
	}

	return (
		<TodoContext.Provider value={{ 
			addTodo,
			completeToDo, 
			deleteToDo,
			error, 
			loading,
			saveItem, 
			searchedTodos, 
			searchValue,
			setSearchValue, 
			todos, 
			total,
			totalCompleted,
			editToDo
		}}>
			{ children }
		</TodoContext.Provider>
	)
}

export { 
	TodoContext,
	TodoProvider
}