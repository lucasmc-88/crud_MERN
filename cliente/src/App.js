import './App.css';
import ListaUsuarios from './components/pages/ListaUsuarios'
import AgregarUsuarios from './components/pages/AgregarUsuarios';
import EditarUsuario from './components/pages/EditarUsuarios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1> Crud MERN STACK </h1>

      <BrowserRouter>
        <Routes>
        
            <Route exact path='/' element={<ListaUsuarios />}></Route>
            <Route exact path='/AgregarUsuarios' element={<AgregarUsuarios />}></Route>
            <Route exact path='/EditarUsuarios' element={<EditarUsuario />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
