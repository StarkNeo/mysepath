import React from "react";
import foto from '../images/IMG_20240318_143601214_HDR.jpg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import './main.css';
import { NavLink } from "react-router-dom";

export const Main = () => {

    return (
        <div id="main-div">
            <section id="principal-about">

                <img id="profile-photo" src={foto}></img>
                <div id="about">
                    <h1>Jesus Hernandez</h1>
                    <h3>Software Developer</h3>
                    <div id="contact">
                        <a href="https://www.linkedin.com/in/jesus-hernandez-5134a484" target="_blank"><img src={linkedin} /></a>
                         <a href="https://github.com/StarkNeo" target="_blank"><img src={github} /></a>
                        
                        
                    </div>
                    <p>Profesional Contador Publico, con mas de 25 años de experiencia y apasionado desde muy joven por las ciencias computacionales.<br>
                    </br>
                        Desde hace 6 años comence a esta nueva ruta de la Ingenieria de Software aprendiendo por mi cuenta, leyendo libros, tomando cursos etc. <br>
                        </br>
                        He creado esta pagina para documentar mi paso por la carrera de Ingenieria de Software que estoy tomando asi como compartir otros articulos que me parezcan interesantes y relacionados a este facinante mundo de las ciencias computacionales.
                        <br></br>

                    </p>
                </div>

            </section>
            
        </div>

    )
}