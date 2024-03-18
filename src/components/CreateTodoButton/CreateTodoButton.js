import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import styles from './CreateTodoButton.module.css'

export function CreateTodoButton() {
	const { openModal, setOpenModal } = useContext(TodoContext)
	const handlerClick = () => {
		setOpenModal(!openModal)
	}

	return(
		<>
			<button 
				type="button" 
				className={ styles.CreateTodoButton }
				onClick={ handlerClick }
			>
				{/* ➕ */}
				+
			</button>
		</>
	)
}