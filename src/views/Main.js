import React from "react";
import foto from '../images/IMG_20240318_143601214_HDR.jpg';
import foto2 from '../images/fotosmart.gif';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import './main.css';
import { Carousel } from "../components/Carrusel/Carousel";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export const Main = () => {
    
    

    return (
        <div id="main-div">
            
            <Carousel />
            <section id="principal-about">
                <img id="profile-photo" src={foto2}></img>
                <div id="about">
                    <div id="contact">
                        <a href="https://www.linkedin.com/in/jesus-hernandez-5134a484" target="_blank"><img src={linkedin} /></a>
                        <a href="https://github.com/StarkNeo" target="_blank"><img src={github} /></a>


                    </div>
                    <p>Profesional Contador Publico, con mas de 25 años de experiencia y un gran apasionado de las ciencias computacionales.<br>
                    </br>
                        Desde hace 6 años comence a esta nueva ruta de la Ingenieria de Software aprendiendo por mi cuenta, leyendo libros, tomando cursos etc. <br>
                        </br>
                        
                    </p>
                </div>

            </section>

        </div>

    )
}