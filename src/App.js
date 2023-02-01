import './App.css';
import HelloWorld from './components/HelloWorld.js';

function App() {
  const name = "mAtheUs";
  const newName = name.toLowerCase();

  const url = 'http://via.placeholder.com/150'

  function sum(a,b){
    return a + b;
  }

  return (
    <div className="App">
      <h1>Alterando JSX</h1>
      <p>Meu primeiro projeto</p>
      <p>Olá, {newName}</p>
      <p>soma: {sum(5,2)} </p>
      <img src={url} alt=''/>
      <HelloWorld/>
    </div>
  );
}

export default App;
