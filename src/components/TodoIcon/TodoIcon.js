import { ReactComponent as CheckSvg } from '../../assets/check.svg'
import { ReactComponent as DeleteSvg } from '../../assets/delete.svg'
import { ReactComponent as EditSvg } from '../../assets/edit.svg'
import './TodoIcon.css'

const iconsAllowed = {
	'check': (color) => <CheckSvg className='Icon-svg Icon-svg--check' fill={color}/>,
	'delete': (color) => <DeleteSvg className='Icon-svg Icon-svg--delete' fill={color} />,
	'edit': (color) => <EditSvg className='Icon-svg Icon-svg--edit' fill={color} />,
}

export const TodoIcon = (props) => {
	const { type, color = 'gray', onClick } = props

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