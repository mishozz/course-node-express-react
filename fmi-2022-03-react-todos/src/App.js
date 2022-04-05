import { useState } from 'react';
import './App.css';
import TodoFilter from './components/TodoFilter';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import MOCK_TODOS from './model/mock-todos';
<<<<<<< HEAD
import { ALL_STATUSES, ACTIVE, CANCELED, COMPLETED } from './model/todo-model'

function App() {
  const [todos, setTodos] = useState(MOCK_TODOS)
  const [filter, setFiter] = useState(ALL_STATUSES)

=======
import { ALL_STATUSES } from './model/todo-model';

function App() {
  const [todos, setTodos] = useState(MOCK_TODOS)
  const [filter, setFilter] = useState(ALL_STATUSES);
>>>>>>> 87908187112f5b25aac414cea7c5564cbb6bfdd9
  function deleteTodo(deleted) {
    setTodos(oldTodos => oldTodos.filter(td => td.id !== deleted.id));
  }
  function statusChanged(changedTodo) {
    setTodos(oldTodos => oldTodos.map(td => td.id === changedTodo.id? changedTodo : td))
  }
<<<<<<< HEAD
  function filterChanged(filterText){
    console.log(filterText)
    setFiter(filterText)
=======
  function filterChanged(filter){
    setFilter(filter)
>>>>>>> 87908187112f5b25aac414cea7c5564cbb6bfdd9
  }
  return (
    <div className="App-header">
      <h1>React TODOs Demo</h1>
      <TodoInput onSubmitTodo={todo => setTodos(oldTodos => [...oldTodos, todo])} />
<<<<<<< HEAD
      <TodoFilter filter={filter} onFilterChange={filterChanged} />
=======
      <TodoFilter onFilterChange={filterChanged} />
>>>>>>> 87908187112f5b25aac414cea7c5564cbb6bfdd9
      <TodoList todos={todos} filter={filter} onDelete={deleteTodo} onStatusChange={statusChanged}/>
    </div>
  );
}

export default App;
