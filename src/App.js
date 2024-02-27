import { 
  CreateTodoButton ,
  TodoItem,
  TodoList,
  TodoSearch,
  TodoCounter
} from './components/';
import './App.css';

function App() {
  return (
    <>
      <TodoCounter total={ 10 } totalCompleted= { 1 } />
      <TodoSearch />

      <TodoList>
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
