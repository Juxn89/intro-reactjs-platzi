import { 
  CreateTodoButton ,
  TodoItem,
  TodoList,
  TodoSearch,
  TodoCounter
} from './components/';
import { defaultTodos } from './data/todos'
import './App.css';

function App() {
  return (
    <>
      <TodoCounter total={ 10 } totalCompleted= { 1 } />
      <TodoSearch />

      <TodoList>
        {
          defaultTodos.map(todo => (
            <TodoItem key={todo.id} name={ todo.name } completed={ todo.completed }/>
          ))
        }
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
