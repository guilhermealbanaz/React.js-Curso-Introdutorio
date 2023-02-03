import {useState} from 'react'

import './App.css';
import Evento from './components/Evento'
import Form from './components/Form'

function App() {
  const[number, setNumber] = useState(1);
  const[number2, setNumber2] = useState(2);

  const changeNumber = () => {
    setNumber(number + 1)
  }

  const changeNumber2 = () => {
    //Previous value
    setNumber2((prevNumber2) => prevNumber2 + 1)
    setNumber2((prevNumber2) => prevNumber2 + 2)
  }

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero={1}/>
      <Evento numero={2}/>
      <Form/>
      <div>
        <p>O número atual é: {number}</p>
        <button onClick={changeNumber}>Somar Número</button>
      </div>
      <div>
        <p>O número atual é: {number2}</p>
        <label id='botão2'>somando 1 e depois somando 2 no novo valor:</label>
        <button onClick={changeNumber2} id='botão2'>Alterar 2 vezes uma única váriavel</button>
      </div>
    </div>
  );
}

export default App;
