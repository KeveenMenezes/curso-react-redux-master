import './Menu.css'
import React from 'react'


const Menu = props => (
    <div className="Menu">
        <nav>
            <ul>
                <li>
                    <a href="/">Início</a>
                </li>
                <li>
                    <a href="/param/123">Param #01</a>
                </li>
                <li>
                    <a href="/param/legal">Param #02</a>
                </li>
                <li>
                    <a href="/about">Sobre</a>
                </li>
            </ul>
        </nav>
    </div>
)

export default Menu