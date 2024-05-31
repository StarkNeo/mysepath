import React from "react";
import { useState } from "react";
import './desarrollos.css';
import { Convertidor } from "../components/Convertidor";
import { Facalculator } from "../components/Facalculator";
import { CalculadoraResico } from "../components/CalculadoraResico";
export const Desarrollos = () => {
    
    return (
        <div id="main-content">

            <details>
                <summary className="subjects">Convertidor de Sistemas Numericos</summary>
                <Convertidor />
            </details>
            <details>
                <summary className="subjects">Calculadora de ganancia en venta de activos fijos</summary>
                <Facalculator />
            </details>
            <details>
                <summary className="subjects">Calculadora Resico 2024</summary>
                <CalculadoraResico />
            </details>


        </div>

    )
}