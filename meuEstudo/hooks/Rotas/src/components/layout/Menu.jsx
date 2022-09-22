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
                    <a href="/useState">useState</a>
                </li>
                <li>
                    <a href="/useEffect">useEffect</a>
                </li>
                <li>
                    <a href="/useRef">useRef</a>
                </li>
                <li>
                    <a href="/useMemo">useMemo</a>
                </li>
                <li>
                    <a href="/useCallback">useCallback</a>
                </li>
                <li>
                    <a href="/useContext">useContext</a>
                </li>
                <li>
                    <a href="/useReducer">useReducer</a>
                </li>
                <li>
                    <a href="/useCustom">useMyHook</a>
                </li>
            </ul>
        </nav>
    </div>
)

export default Menu