import styles from './TodoSearch.module.css'

export function TodoSearch() {
    return(
      <>
        <input placeholder="Save the world!" className={ `${styles.TodoSearch}` }/>
      </>
    )
  }