import React from "react";
import { useState } from "react";
import './desarrollos.css';
import { Convertidor } from "../components/Convertidor";
export const Desarrollos = () => {
    
    return (
        <div id="main-content">

            <details>
                <summary className="subjects">Convertidor de Sistemas Numericos</summary>
                <Convertidor />
            </details>

        </div>

    )
}