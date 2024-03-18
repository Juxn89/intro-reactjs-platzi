import { CompleteIcon } from '../ui/CompleteIcon/CompleteIcon'
import { DeleteIcon } from '../ui/DeteleIcon/DeleteIcon'
import styles from './TodoItem.module.css'

export function TodoItem(props) {
	const { name, completed, handleComplete, handleDetele } = props

	return(
		<li className={ styles.TodoItem }>
			<CompleteIcon completed={ completed } onComplete={ handleComplete } />

			<p className={ `${styles['TodoItem-p']} ${completed && styles['TodoItem-p--complete']}` }>{name}</p>

			<DeleteIcon onDelete={ handleDetele } />
		</li>
	)
}