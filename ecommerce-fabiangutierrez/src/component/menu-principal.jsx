import React from 'react';
import './menu-principal.css'; 
import {CarritoIcono} from './carrito-icono.jsx';
export const MenuPrincipal=()=>{
return(
<div className="menu">
<div className='menuElement'>Inicio</div>
<div className='menuElement'>Productos</div>
<div className='menuElement'>politicas</div>
<div className='menuElement'>Contacto</div>
<div className='menuElement'><CarritoIcono/></div>
</div>
);
}
