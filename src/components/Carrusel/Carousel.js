import React from "react";
import { useState, useEffect } from "react";
import './carousel.css';
import { webSkills, dataScienceSkills } from "../../services/skillsList";

export const Carousel = () => {
    const [skillsData, setSkillsData] = useState(dataScienceSkills);
    const [array, setArray] = useState(webSkills);
    return (
        <section id="carrusel">

            <div id="skills-list">
                <h2 className="list-title">Web Development</h2>
                <ul id="trending">
                    {array.map(element => (<li key={element.id}>{element.skill_name}</li>))}

                </ul>
                <h2 className="list-title">Data Science</h2>
                <ul className="innerCarrusel">
                    {skillsData.map(element => (<li key={element.id}>{element.skill_name}</li>))}

                </ul>

            </div>

        </section>
    )
}