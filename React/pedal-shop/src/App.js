import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './itemListContainer/ItemListContainer';
import Form from './Form/Form';
import ItemDetailContainer from './DetalleDeProducto/ItemDetailContainer';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Cart from './carrito/Cart';
function App() {

  return (
      <BrowserRouter>
            <>
      
      <header className="App-header">
          <Navbar />
      </header>
      
     <Routes>
      <Route path='/' element={ <ItemListContainer greeting={'Listado de Productos'}/>}/>

      <Route path='/category/:category' element={ <ItemListContainer greeting={'Listado de Productos'}/>}/>

      <Route path='/item/:id' element={ <ItemDetailContainer />}/>

      
      <Route path='/formulario-de-pago' element={ <Form />}/>

      <Route path='/carrito' element={<Cart />} />
     </Routes>
      </>

      </BrowserRouter>

  );
}

export default App;
