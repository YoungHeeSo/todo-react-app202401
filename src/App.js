// import logo from './logo.svg';
// import ReactDOM from "react-dom/client";

import './App.css';

import TodoTemplate from "./component/todo/TodoTemplate";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Join from "./component/user/Join";
import {Route, Routes} from "react-router-dom";
import Login from "./component/user/Login";

function App() {
  return (
      <>
        <Header />

        <Routes>
          <Route path={'/'} element={<TodoTemplate />}/>
          <Route path={'/join'} element={<Join />}/>
            <Route path={'/login'} element={<Login />} />
        </Routes>

        <Footer />
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
