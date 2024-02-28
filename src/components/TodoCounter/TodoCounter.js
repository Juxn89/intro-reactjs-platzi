import styles from './TodoCounter.module.css'

export function TodoCounter(props) {
	const { total = 0, totalCompleted = 0 } = props
	return(
		<h1 className={ styles.TodoCounter }>
			You have completed <span> { totalCompleted } </span> of <span> {total} </span>TODOs
		</h1>
	)
}