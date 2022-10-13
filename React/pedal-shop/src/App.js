import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './itemListContainer/ItemListContainer';
import Form from './Form/Form';
import ItemDetailContainer from './DetalleDeProducto/ItemDetailContainer';


function App() {

  return (
      <>
      
      <header className="App-header">
          <Navbar />
      </header>
      <ItemListContainer greeting={'Listado de Productos'}/>
      <ItemDetailContainer />
      <Form />
      </>

  );
}

export default App;
