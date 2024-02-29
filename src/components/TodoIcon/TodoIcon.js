import { ReactComponent as CheckSvg } from '../../assets/check.svg'
import { ReactComponent as DeleteSvg } from '../../assets/delete.svg'
import styles from '../TodoItem/TodoItem.module.css'

const iconsAllowed = {
	'check': <CheckSvg />,
	'delete': <DeleteSvg />
}

export const TodoIcon = (props) => {
	const { type } = props;
	const baseStyle = `${styles.Icon} ${styles['Icon-svg']}`
	return(
		<span className={ `${baseStyle} ${styles[`Icon-${type}`]}` }>
			{
				iconsAllowed[type]
			}			
		</span>
	)
}