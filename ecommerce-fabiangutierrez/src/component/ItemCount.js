import { React, useState } from "react";
import './ItemCount.css'

export const ProductosBox = () => {
    const [contador, setContador] = useState(0);
    const aumentaCantidad = () => {

        if ((contador + 1) <= 10)
            setContador(contador + 1)

    }

    const desminuirCantidad = () => {
        if ((contador - 1) >= 0)
            setContador(contador - 1)

    }
    const mostrarEnLog = () => {
        console.log(contador)

    }


    return (
        <div className="tamano">
            <div className="titulo">Máximo 10 Productos</div>
            <div>{contador}</div>
            <div className="contenedor"><div className="botonSubirBajar"><button onClick={desminuirCantidad}>-</button></div><div className="botonBajar"><button onClick={aumentaCantidad} value='+' >+</button></div></div>
            <div><button onClick={mostrarEnLog}>Agregar al Carrito</button></div>
        </div >
    )
}