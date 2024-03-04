import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import styles from './TodoSearch.module.css'

export function TodoSearch() {
	const {searchValue, setSearchValue} = useContext(TodoContext)

	const onChangeHandler = (event) => {
		// console.log('TodoSearch | onChangeHandler', { event, 'target': event.target, 'value': event.target.value })
		setSearchValue(event.target.value)
	}

	return(
		<>
			<input 
				placeholder="Save the world!" 
				className={ `${styles.TodoSearch}` }
				onChange={ onChangeHandler }
				value={ searchValue }
			/>
		</>
	)
}