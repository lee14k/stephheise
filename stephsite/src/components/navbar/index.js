import React from "react"
import {NavLink} from 'react-router-dom'


const Navigation =()=>{
    return(
<nav>
        <ul>
            <li>
    <NavLink to="/" >
            Home
    </NavLink>
    </li>
    <li>
    <NavLink to="/">
        Portfolio
        </NavLink>
        </li>
        <li>
        <NavLink to="/" >
        About
        </NavLink>
        </li>
        <li>
        <NavLink to="/" >
        Contact
        
        </NavLink>
        </li>
        </ul>
 </nav>
)}

export default Navigation