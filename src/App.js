import { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton } from './components/';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
