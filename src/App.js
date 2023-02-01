import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ItemList />
    </div>
  );
}

export default App;
