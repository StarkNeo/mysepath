import React from "react";
import { useState, useEffect } from "react";
import './titleNav.css';
import { topics } from "../../services/topics";
import { NavLink } from "react-router-dom";

export const TitleNav = () => {
    const [temas, setTemas] = useState([]);
    console.log(temas);
    useEffect(() => {
        setTemas(topics);
    }, []);


    return (
        <nav className="navigation">
            <ul id="nav-links">
                {temas.map(element => (<li className="link" key={element.id}><NavLink to={`/${element.type}`} key={element.id} className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'} >{element.type}</NavLink></li>))}
            </ul>

        </nav>
    )
}