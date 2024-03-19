import { CompleteIcon } from '../ui/CompleteIcon/CompleteIcon'
import { DeleteIcon } from '../ui/DeteleIcon/DeleteIcon'
import { EditIcon } from '../ui/EditIcon/EditIcon'
import styles from './TodoItem.module.css'

export function TodoItem(props) {
	const { name, completed, handleComplete, handleDetele, handleEdit } = props

	return(
		<li className={ styles.TodoItem }>
			<CompleteIcon completed={ completed } onComplete={ handleComplete } />

			<p className={ `${styles['TodoItem-p']} ${completed && styles['TodoItem-p--complete']}` }>{name}</p>

			<EditIcon handleEdit={ handleEdit } />

			<DeleteIcon onDelete={ handleDetele } />
		</li>
	)
}