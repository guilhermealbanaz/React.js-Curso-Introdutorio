import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = "Maria"

  return (
    <div className="App">
      <SayMyName nome="Matheus"/>
      <SayMyName nome={nome}/>
      <SayMyName nome="João"/>
      <Pessoa foto="https://via.placeholder.com/150" nome="Rodrigo" idade="28" profissao="programador" />
    </div>
  );
}

export default App;
