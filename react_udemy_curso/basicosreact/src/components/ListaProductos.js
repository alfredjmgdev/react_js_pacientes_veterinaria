import React, { Component, Fragment } from 'react';
import Producto from './Producto.js';

class ListaProductos extends Component {
    state = {
        productos: [
            { id: 1, nombre: 'ReactJs', precio: 30},
            { id: 2, nombre: 'VueJs', precio: 30},
            { id: 3, nombre: 'Angular', precio: 30},
            { id: 4, nombre: 'NodeJS', precio: 30}
        ]
    };

    componentDidMount(){
        console.log(1)
    };

    componentWillMount(){
        console.log(2)
    };

    componentWillUpdate(){
        console.log(3)
    };

    componentWillUnmount(){
        console.log(4)
    };

    render() {

        console.log(5)

        const {productos} = this.state;

        return(
            <Fragment>
                <h1>
                    Lista de productos
                </h1>
                {productos.map(producto => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </Fragment>
        );
    }
};

export default ListaProductos;