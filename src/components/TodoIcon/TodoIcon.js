import { ReactComponent as CheckSvg } from '../../assets/check.svg'
import { ReactComponent as DeleteSvg } from '../../assets/delete.svg'
import './TodoIcon.css'

const iconsAllowed = {
	'check': (color) => <CheckSvg className='Icon-svg' fill={color}/>,
	'delete': (color) => <DeleteSvg className='Icon-svg' fill={color} />
}

export const TodoIcon = (props) => {
	const { type, color, onClick } = props;

	return(
		<span 
			className={ `Icon-container Icon-container-${type}` } 
			onClick={ onClick }
		>
			{
				iconsAllowed[type](color)
			}			
		</span>
	)
}