import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ListaProductos from './components/ListaProductos.js';

function App() {

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        titulo='Tienda virtual'
      />
      
    <ListaProductos/>

      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
