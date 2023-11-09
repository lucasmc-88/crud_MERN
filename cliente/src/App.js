import './App.css';
import ListaUsuarios from './components/home/ListaUsuarios';
import AgregarUsuarios from './components/home/AgregarUsuarios';
import EditarUsuario from './components/home/EditarUsuarios';

// prueba

function App() {
  return (
    <div className="App">
      <h1> Crud MERN STACK </h1>
      <ListaUsuarios/>
      <AgregarUsuarios/>
      <EditarUsuario/>
    </div>
  );
}

export default App;
