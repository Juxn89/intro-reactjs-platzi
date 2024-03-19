import styles from './CreateTodoButton.module.css'

export function CreateTodoButton(props) {
	const { onClick } = props

	return(
		<>
			<button 
				type="button" 
				className={ styles.CreateTodoButton }
				onClick={ onClick }
			>
				+
			</button>
		</>
	)
}