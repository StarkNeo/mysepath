import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './desarrollos.css';
import { Convertidor } from "../components/Convertidor";
import { Facalculator } from "../components/Facalculator";
import { CalculadoraResico } from "../components/CalculadoraResico";
import { projectList } from "../services/projectsList";


export const Desarrollos = () => {
    const [projects, setProjects] = useState(null);
    useEffect(() => {
        setProjects(projectList)
    }, []);



    return (
        <div id="main-content">

            <details className="project-details">
                <summary className="summary-project">Convertidor de Sistemas Numericos</summary>
                <Convertidor />
            </details>
            <details className="project-details">
                <summary className="summary-project">Calculadora de ganancia en venta de activos fijos</summary>
                <Facalculator />
            </details>
            <details className="project-details">
                <summary className="summary-project">Calculadora Resico 2024</summary>
                <CalculadoraResico />
            </details>
            {projects === null?'':projects.map(project => (<details className="project-details">
                <summary className="summary-project">{project.name}</summary>


                <p key={project.id} title="click here">

                    <strong> {project.name}</strong><br />
                    <strong> {project.skill_name}</strong><br /><br />
                    <span>{project.description}</span><br></br><br></br>
                    <span>{project.purpose}</span><br></br> <br></br>
                    <span>{project.year}</span>

                    <Link
                        key={project.id}
                        to={project.url}
                        className="link-style"

                    >
                        {project.url}

                    </Link>
                </p>


            </details>
            ))}

        </div>


    )
}