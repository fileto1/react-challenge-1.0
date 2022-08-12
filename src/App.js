import './App.css';
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function removeFromTodoList(id) {
    setTodoList(todoList.filter(todo => todo.id !== id));
    setFilteredTodoList(filteredTodoList.filter(todo => todo.id !== id));
  }

  function updateInput(event) {
    setInputValue(event.target.value);
  }

  function handleAddTodoList(event) {
    event.preventDefault();
    const newItem = {id: Math.random(), name: inputValue};
    setTodoList([...todoList, newItem]);
    setFilteredTodoList([...todoList, newItem]);
    setInputValue('');
  }

  function filterTodoList(event) {
    const filtered = todoList.filter(todo => todo.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredTodoList(filtered);
  }

  return (
    <>
      <h1>Lista de tarefas</h1>
      <form onSubmit={handleAddTodoList}>
        <input required minLength={2} maxLength={50} type="text" value={inputValue} onChange={updateInput} placeholder="Adicione novos items aqui..." />
        <input type="submit" value="Add"/>
      </form>
      <div>
        <input type="text" onChange={filterTodoList} placeholder="Digite aqui para filtrar..." />
        <ul>
          {
            filteredTodoList.map(todo => (
              <li key={todo.id}>
                {todo.name} - 
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
