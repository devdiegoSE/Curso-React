import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name= 'Diego';
  const idade= 38;
  const newName= name.toUpperCase();

  function sum(a, b){
    return a + b;
  }

  const url = 'https://placehold.co/200'

  return (
    <div className="App">
      <h1>Meu primeiro projeto React</h1>
      <p>Estou muito feliz em aprender essa tecnologia.</p>
      <p>Meu nome é {name} e tenho {idade} anos.</p>
      <p>Soma: {sum(1,2)} </p>
      <img src={url} alt="Minha imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
