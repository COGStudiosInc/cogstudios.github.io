import logo from './logo.svg';
import './App.css';
import Menu from './Menu.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">COG Studios Inc</div>
        <div className="menu"><Menu></Menu></div>
      </header>
      <div className="bodysection"></div>
    </div>
  );
}

export default App;
