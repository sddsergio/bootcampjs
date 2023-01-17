import './App.css';
import Mensaje from './Mensaje.js';

const Titulo = () => {
  return <p>Hola mundo desde un componente</p>
}

const App = () => {
  const titulo = 'Hola mundo!'
  return (
    <div className="App">
      {titulo}
      <Titulo />
      <Mensaje color="blue" message='Estamos trabajando' />
      <Mensaje color="green" message='En un curso' />
      <Mensaje color="red" message='de React' />
      <Mensaje color="blue" message='desde un Módulo' />
    </div>
  );
}

export default App;
