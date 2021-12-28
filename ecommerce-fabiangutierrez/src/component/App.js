import React from "react";
import { NavBar } from './NavBar'
import { ItemListContainer } from './ItemListContainer'
import { ProductosBox } from './ProductosBox'

export const App = () => {
    const saludo = 'Saludos en Pantalla';

    return (< div >
        <NavBar>
            <ItemListContainer greetings={saludo} />
        </NavBar>
        <ProductosBox />
    </div>

    )
}