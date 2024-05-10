import React from "react";
import './tareas.css';
export const Tareas = () => {


    return (
        <div id="main-content">
            
           <details>
            <summary className="subjects">Fundamentos de Programacion II</summary>
            <details>
                <summary className="asigments">Actividad 1.2 Linea del tiempo</summary>
                <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=14cyYjVmr472bI7FeupyxQhf4INtDiYRaoe_OskcKhXU&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
            </details>
            
           </details>
           <details>
            <summary className="subjects">Estructuras Algebraicas</summary>
           </details>
           <details>
            <summary className="subjects">Interfaces de usuario basadas en web</summary>
           </details>
        </div>

    )
}