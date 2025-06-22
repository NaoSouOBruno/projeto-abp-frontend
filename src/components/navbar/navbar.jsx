import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

export function Navbar() {

return (
<nav>
    <ul className="nav">
        <img className="logo" src="../public/logo.png"/>
        <div>

        <Link to="/Stats">
        <li className="lista">
            <b>ESTATÍSTICAS</b>
        </li>
        </Link>

        <Link to="/Index">
        <li className="lista">
            <b>CACHORROS</b>
        </li>
        </Link>

        <Link to="/Estoque">
        <li className="lista">
            <b>ESTOQUE</b>
        </li>
        </Link>
        </div>
    </ul>
</nav>

)
}