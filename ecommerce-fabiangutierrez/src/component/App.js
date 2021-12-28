import React from "react";
import { NavBar } from './NavBar'
import { ItemListContainer } from './ItemListContainer'
import { ProductosBox } from './ItemCount'

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