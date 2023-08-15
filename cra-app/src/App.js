import logo from './logo.svg';
import './App.css';
import { Counter, DrinkBeer, Login, UseState } from './components/UseState/Counter';
import { Checkbox, Checkbox1 } from './components/UseState/Checkbox';
import Register from './components/UseState/Register';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    <Register />
  );
}

export default App;
