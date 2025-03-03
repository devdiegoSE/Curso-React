import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  return (
    <div className="App">
      <h1>Olá, mundo!</h1>
      <Frase />
      <Frase />
      <SayMyName name="João" />
      <SayMyName name="Maria" />
      <Pessoa nome="João" idade="35" profissao="Desenvolvedor" foto="https://placehold.co/100" />
      <Pessoa nome="Maria" idade="30" profissao="Designer" foto="https://placehold.co/100" />
      <List />
    </div>
  );
}

export default App;
