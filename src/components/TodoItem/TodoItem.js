import { CompleteIcon } from '../ui/CompleteIcon/CompleteIcon';
import { DeleteIcon } from '../ui/DeteleIcon/DeleteIcon';
import styles from './TodoItem.module.css'

export function TodoItem(props) {
  const { id, name, completed, handleComplete, handleDetele } = props;

	return(
		<li className={ styles.TodoItem }>
			<CompleteIcon />
			{/* <span className={ `${styles.Icon} ${styles['Icon-check']} ${completed && styles['Icon-check--active']} }`} onClick={ () => handleComplete(id) }>
				{ completed ? '' : '✔️' }
			</span> */}
			<p className={ `${styles['TodoItem-p']} ${completed && styles['TodoItem-p--complete']}` }>{name}</p>
			{/* <span className={ `${styles.Icon} ${styles['Icon-delete']}` } onClick={ () => handleDetele(id) }>
				❌
			</span> */}
			<DeleteIcon />
		</li>
	);
}