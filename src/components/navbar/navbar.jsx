import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

export function Navbar() {

return (
<nav>
    <ul className="nav">
        <img className="logo" src="../public/logo.png"/>
        <li className="lista">
            <Link to="/Estoque"><b>ESTOQUE</b></Link>
        </li>
        <li className="lista">
            <Link to="/Index"><b>CACHORROS</b></Link>
        </li>
        <li className="lista">
            <Link to="/Stats"><b>ESTATÍSTICAS</b></Link>
        </li>
    </ul>
</nav>

)
}