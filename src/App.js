import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome={nome}/>
      <SayMyName nome="João"/>
      <Pessoa foto="https://via.placeholder.com/150" nome="Rodrigo" idade="28" profissao="programador" />
    </div>
  );
}

export default App;
