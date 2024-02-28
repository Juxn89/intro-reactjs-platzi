import { useState } from 'react'
import styles from './TodoSearch.module.css'

export function TodoSearch(props) {
	const {searchValue, setSearchValue} = props

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