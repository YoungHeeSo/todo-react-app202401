import logo from './logo.svg';
import './App.css';
import TodoTemplate from "./component/TodoTemplate";
import ReactDOM from "react-dom/client";

function App() {
  return (
      <>
        {/*<h1>안녕하세요~!</h1>*/}
        <TodoTemplate />
      </>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
