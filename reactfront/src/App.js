
import './App.css';
import 'babel-polyfill';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowProductos from './componentes/ShowProductos';
import CreatePoductos from './componentes/CreateProductos';
import EditPoductos from './componentes/EditProductos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowProductos/> } />
        <Route path='/create' element={<CreatePoductos/> } />
        <Route path='/edit/:id' element={<EditPoductos/> } />

      </Routes>
      
      </BrowserRouter>
     
      
       
      
    </div>
  );
}

export default App;
