import { useContext, useState } from 'react'
import { TodoContext } from '../../context/TodoContext'
import './TodoForm.css'

export const TodoForm = () => {
	const [newTodoValue, setNewTodoValue] = useState()
	const { setOpenModal, addTodo} = useContext(TodoContext)

	const handlerSubmitForm = (event) => {
		event.preventDefault()

		addTodo(newTodoValue)
		setOpenModal(false)
	}

	const handlerOnChange = (event) => {
		const todoName = event.target.value
		setNewTodoValue(todoName)
	}

	return(
		<form onSubmit={ handlerSubmitForm }>
			<label>Write your new ToDo</label>
			<textarea 
				placeholder="What do you need?"
				value={ newTodoValue }
				onChange={ handlerOnChange }
			/>			
			<div className='TodoForm-buttonContainer'>
				<button 
					type='button' 
					className="TodoForm-button TodoForm-button--cancel" 
					onClick={ () => setOpenModal(false) }
				>
					Cancel
				</button>
				<button 
					type='submit' 
					className="TodoForm-button TodoForm-button--add"
				>
					Add
				</button>					
			</div>
		</form>
	)
}