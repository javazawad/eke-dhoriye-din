import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemView } from "./homepage/ItemView";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { HomePage } from "./homepage/HomePage";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
