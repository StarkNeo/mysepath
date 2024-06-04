import React from "react";
import { useState, useEffect } from "react";
import './titleNav.css';
import { topics } from "../../services/topics";
import { NavLink } from "react-router-dom";
import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg';

export const TitleNav = () => {
    const [temas, setTemas] = useState([]);
    useEffect(() => {
        setTemas(topics);
    }, []);


    return (
        <nav className="navigation">
            <ul id="nav-links">
                <div id="contact">
                    <h1>Jesus Hernandez</h1>
                    <h3>Software Developer</h3>
                    <div>
                        <a href="https://www.linkedin.com/in/jesus-hernandez-5134a484/">
                            <img className="contact-img" src={linkedin} />
                        </a>
                        <a href="https://github.com/StarkNeo"><img className="contact-img" src={github} /></a>
                        

                    </div>

                </div>
                {temas.map(element => (<li className="link" key={element.id}><NavLink to={`/${element.type}`} key={element.id} className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'} >{element.type}</NavLink></li>))}
                
            </ul>

        </nav>
    )
}