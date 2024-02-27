import { 
  CreateTodoButton ,
  TodoItem,
  TodoList,
  TodoSearch,
  TodoCounter
} from './components/';
import './App.css';

const defaultTodos = [
  { name: 'Task #1', completed: false },
  { name: 'Task #2', completed: false },
  { name: 'Task #3', completed: true },
  { name: 'Task #4', completed: false }
]

function App() {
  return (
    <>
      <TodoCounter total={ 10 } totalCompleted= { 1 } />
      <TodoSearch />

      <TodoList>
        {
          defaultTodos.map((todo, index) => (
            <TodoItem key={index} name={ todo.name } completed={ todo.completed }/>
          ))
        }
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
