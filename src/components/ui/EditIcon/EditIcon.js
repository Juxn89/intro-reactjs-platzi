import { TodoIcon } from '../../index'

export const EditIcon = ({ handleEdit }) => {
	return(
		<TodoIcon
			type='edit'
			onClick={ handleEdit }
		/>
	)
}