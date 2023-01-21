import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let todos = 0;
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section>
        <h2>
          Mini <code>TODO</code> App
        </h2>
          <input type="text" id="inputBox"
            onKeyDown={ (e) => { if (['Enter', 'NumpadEnter'].includes(e.key)) addTodo(e) } }
          />
        </section>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul id="todoContainer">
          {todoList}
        </ul>
      </header>
    </div>
  );
  function addTodo(e) {
    console.log("It works");
    const input = e.target.value;
    if (input.length) return;
    todos++;
    const n = String(todos);
    const temp = [...todoList];     
    // make a todo element and update list
    (
      <div id={"todo_" + n}>
        <span id={"text_" + n}> {input} </span>
      </div>
    ).push(temp);
    console.log(temp);
    setTodoList(temp);
  } 
}

export default App;
