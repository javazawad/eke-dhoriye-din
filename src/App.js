import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemView } from "./homepage/ItemView";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { HomePage } from "./homepage/HomePage";
import { HomeNav } from "./nav/NavBar";

function App() {
  return (
    <div>
      <HomeNav />
      <HomePage />
    </div>
  );
}

export default App;
