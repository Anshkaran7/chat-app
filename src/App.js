import "./App.css";
import "./style.scss";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
      <Register />
      <Login />
      <Home/>
    </div>
  );
}

export default App;
