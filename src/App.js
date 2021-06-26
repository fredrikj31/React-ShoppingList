import './App.css';
import Header from './Components/Header';
import List from './Components/List';

function App() {
  return (
    <div className="App">
      <Header title="Welcome to this App"></Header>
	  <List todos={["Hej med dig", "Test 2", "Hej"]}></List>
    </div>
  );
}

export default App;
