import logo from './logo.svg';
import translogo from "./assets/images/logo-trans.png"
import texttranslogo from "./assets/images/textlogo-trans.png"
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage}/>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <img src={translogo}  alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //       <img src={texttranslogo} alt="logo" />
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
  );
}

export default App;
