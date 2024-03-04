import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import styles from './TodoCounter.module.css'

export function TodoCounter() {
	const { total = 0, totalCompleted = 0 } = useContext(TodoContext)
	
	return(
		<h1 className={ styles.TodoCounter }>
			You have completed <span> { totalCompleted } </span> of <span> {total} </span>TODOs
		</h1>
	)
}