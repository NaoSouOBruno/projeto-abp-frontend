import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

export function Navbar() {

return (
<nav>
    <ul className="nav">
        <img className="logo" src="../public/logo.png"/>
        <li className="lista">
            <Link to="/Estoque">Estoque</Link>
        </li>
        <li className="lista">
            <Link to="/Index">Cachorros</Link>
        </li>
        <li className="lista">
            <Link to="/Stats">Estatisticas</Link>
        </li>
    </ul>
</nav>

)
}