export function TodoItem(props) {
  const { name, completed } = props;
    return(
      <li>
        <span>{ completed ? '✔️' : '' }</span>
        <p>{name}</p>
        <span>❌</span>
      </li>
    );
  }