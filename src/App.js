import './App.css';
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const removeFromTodoList = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  }

  const updateInput = (event) => {
    setInputValue(event.target.value);
  }

  const handleAddTodoList = (event) => {
    event.preventDefault();
    const newTodoItem = {id: Math.random(), name: inputValue};
    setTodoList([...todoList, newTodoItem]);
    setInputValue('');
  }

  const handleTodoListChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <>
      <h1>Lista de tarefas</h1>
      <form onSubmit={handleAddTodoList}>
        <input required minLength={2} maxLength={50} type="text" value={inputValue} onChange={updateInput} placeholder="Adicione novos items aqui..." />
        <input type="submit" value="Add"/>
      </form>
      <div>
        <input type="text" value={filterValue} onChange={handleTodoListChange} placeholder="Digite aqui para filtrar..." />
        <ul>
          {
            todoList.filter(todo => todo.name.toLowerCase().includes(filterValue.toLowerCase())).map(
              todo => (
                <li key={todo.id}>
                  {todo.name} 
                  <button onClick={() => removeFromTodoList(todo.id)}> X</button>
                </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App;
