import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  
  //const todos = todoList.length; 
  //const n = String(todos);

  // useEffect(() => {
  //   console.log(`todos:`, todos);
  // }, [todos]);

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
          { 
            todoList?.map((item, n) => {
              return (
                <li id={"todo_" + n}>
                  <span id={"text_" + n}> {item} </span>
                  <button id={"del_" + n} onClick={ delItem }>delete</button>
                </li>
              );
            }) 
          }
        </ul>
      </header>
    </div>
  );
  function addTodo(e) {
    const input = e.target.value;
    console.log("It worked!", input.length); //<--
    if (!(input.length)) return;

    const temp = [...todoList];
    temp.push(input);
    setTodoList(temp); 
    console.log(temp); //<--
    e.target.value = '';
  }

  function delItem(e) {
    console.log(e.target.id);
    const index = Number(e.target.id.slice(4));
    const temp = [...todoList];
    temp.splice(index, 1);
    setTodoList(temp);
  }
}

export default App;
