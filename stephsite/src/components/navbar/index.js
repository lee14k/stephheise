import React from "react"
import { Link } from "react-router-dom";
import './index.css'


const Navigation =()=>{
    return(
<nav>
        <ul>
            <Link to="/">
            <li>
            Home

    </li>
    </Link>
    <Link to="/portfolio">

    <li>

        Portfolio
     
        </li>
        </Link>

        <Link to="/about">

        <li>

        About
     
        </li>
        </Link>
        <Link to="/contact">

        <li>
   
        Contact
    
        </li>
        </Link>
        </ul>
 </nav>
)}

export default Navigation