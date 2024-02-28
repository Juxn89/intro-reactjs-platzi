import styles from './CreateTodoButton.module.css'

export function CreateTodoButton() {
	const handlerClick = (event) => {

	}

	return(
		<>
			<button 
				type="button" 
				className={ styles.CreateTodoButton }
				onClick={ handlerClick }
			>
				➕
			</button>
		</>
	)
}