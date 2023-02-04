import './App.css';
import { atom, selector, useRecoilValue } from 'recoil';
import TodoItemCreator from './components/TodoItemCreator';
import TodoItem from './components/TodoItem';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

function App() {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;
