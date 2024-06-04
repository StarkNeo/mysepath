import React from "react";
import './main.css';
import { Carousel } from "../components/Carrusel/Carousel";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export const Main = () => {
    
    

    return (
        <div id="main-div">
            
            <Carousel />
            <section id="principal-about">
                <div id="about">
                    
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