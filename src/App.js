import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className="App">
      <SayMyName name="João" />
      <SayMyName name="Maria" />
      <Pessoa nome="João" idade="35" profissao="Desenvolvedor" foto="https://placehold.co/100" />
      <Pessoa nome="Maria" idade="30" profissao="Designer" foto="https://placehold.co/100" />
    </div>
  );
}

export default App;
