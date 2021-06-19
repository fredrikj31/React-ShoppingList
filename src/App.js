import './App.css';
import Header from './Components/Header';
import Item from './Components/Item';

function App() {
  return (
    <div className="App">
      <Header title="Welcome to this App"></Header>
	  <Item todo="Hello World"></Item>
    </div>
  );
}

export default App;
