import React from 'react';
import './NavBar.css';
import { CarritoIcono } from './CartWidget.js';

export const NavBar = ({ children }) => {
    return (
        <div>
            <div className="menu">
                <div className='menuElement'>Inicio</div>
                <div className='menuElement'>Productos</div>
                <div className='menuElement'>politicas</div>
                <div className='menuElement'>Contacto</div>
                <div className='menuElement'><CarritoIcono /></div>

            </div>
            {children}
        </div>
    )


}
