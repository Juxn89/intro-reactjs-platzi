import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
	const [item, setItem] = useState(initialValue)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			try {
				const locaStorageItem = localStorage.getItem(key)
				let parsedTodos = [];

				if(locaStorageItem === null) {
					localStorage.setItem(key, JSON.stringify(initialValue))
					parsedTodos = initialValue
				}
				else {
					parsedTodos = JSON.parse(locaStorageItem)
					setItem(parsedTodos)
				}
			} catch (error) {
				setError(true)
			}

			setLoading(false)					
		}, 3000)
	
	}, [])

	const saveItem = (newItem) => {
		const jsonTodos = JSON.stringify(newItem)
		localStorage.setItem(key, jsonTodos)
		setItem(newItem)
	}

	return {
		item,
		saveItem,
		loading,
		error
	}
}