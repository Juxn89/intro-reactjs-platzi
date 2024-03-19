import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TodoForm.css'

export const TodoForm = (props) => {
	const { title, submiteText, submitEvent } = props
	const navigate = useNavigate()
	const [newTodoValue, setNewTodoValue] = useState()

	const handlerSubmitForm = (event) => {
		event.preventDefault()

		// addTodo(newTodoValue)
		submitEvent()
		navigate('/')
	}

	const handlerOnChange = (event) => {
		const todoName = event.target.value
		setNewTodoValue(todoName)
	}

	return(
		<form onSubmit={ handlerSubmitForm }>
			<label>{ title }</label>
			<textarea 
				placeholder="What do you need?"
				value={ newTodoValue }
				onChange={ handlerOnChange }
			/>			
			<div className='TodoForm-buttonContainer'>
				<button 
					type='button' 
					className="TodoForm-button TodoForm-button--cancel"
					onClick={ () => navigate('/') }
				>
					Cancel
				</button>
				<button 
					type='submit' 
					className="TodoForm-button TodoForm-button--add"
				>
					{ submiteText }
				</button>					
			</div>
		</form>
	)
}