import { TodoIcon } from "../../TodoIcon/TodoIcon"


export const DeleteIcon = (props) => {
	const { onDelete } = props

	return(
		<TodoIcon 
			type='delete' 
			color='gray' 
			onClick= { onDelete }
		/>
	)	
}