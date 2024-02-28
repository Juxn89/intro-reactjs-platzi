import styles from './CreateTodoButton.module.css'

export function CreateTodoButton() {
    return(
      <>
        <button type="button" className={ styles.CreateTodoButton }>➕</button>
      </>
    )
}