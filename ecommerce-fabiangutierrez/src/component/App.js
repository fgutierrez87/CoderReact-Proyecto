import React from "react";
import { NavBar } from './NavBar'
import { ItemListContainer } from './ItemListContainer'

export const App = () => {
const saludo='Saludos en Pantalla';

    return ( < div >
        <NavBar>
        <ItemListContainer greetings = {saludo}/>
        </NavBar>
        </div>

    )
}