import './App.css';
import Mensaje from './Mensaje.js';

const Titulo = () =>{
  return <p>Hola mundo desde un componente</p>
}

const App = () => {
  const titulo = 'Hola mundo!'
  return (
    <div className="App">
      {titulo}
      <Titulo />
      <Mensaje message='Estamos trabajando' />
      <Mensaje message='en un curso' />
      <Mensaje message='de React' />

    </div>
  );
}

export default App;
