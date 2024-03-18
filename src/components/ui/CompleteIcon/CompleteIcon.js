import { TodoIcon } from '../../TodoIcon/TodoIcon'

export const CompleteIcon = (props) => {
	const { completed, onComplete } = props

	return(
		<TodoIcon 
			type='check' 
			color={ completed ? 'green' : 'gray' }
			onClick= { onComplete }
		/>
	)
}