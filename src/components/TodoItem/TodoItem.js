import styles from './TodoItem.module.css'

export function TodoItem(props) {
  const { id, name, completed } = props;
    return(
      <li className={ styles.TodoItem }>
        <span className={ `${styles.Icon} ${styles['Icon-check']} ${completed && styles['Icon-check--active']} }`}>
					{ completed ? '✔️' : '' }
				</span>
        <p className={ `${styles['TodoItem-p']} ${completed && styles['TodoItem-p--complete']}` }>{name}</p>
        <span className={ `${styles.Icon} ${styles['Icon-delete']}` }>❌</span>
      </li>
    );
  }