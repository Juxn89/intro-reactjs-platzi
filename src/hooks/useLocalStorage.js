import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

	const locaStorageItem = localStorage.getItem(key)
	let parsedTodos = [];

	if(locaStorageItem === null) {
		localStorage.setItem(key, JSON.stringify(initialValue))
		parsedTodos = initialValue
	}
	else
		parsedTodos = JSON.parse(locaStorageItem)
	
	const [item, setItem] = useState(parsedTodos)

	const saveItem = (newItem) => {
		const jsonTodos = JSON.stringify(newItem)
		localStorage.setItem(key, jsonTodos)
		setItem(newItem)
	}

	return [
		item,
		saveItem
	]
}