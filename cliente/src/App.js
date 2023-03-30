import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListaUsuarios from './components/pages/ListaUsuarios'
import AgregarUsuarios from './components/pages/AgregarUsuarios';
import EditarUsuario from './components/pages/EditarUsuarios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
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
