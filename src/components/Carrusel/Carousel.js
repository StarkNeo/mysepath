import React from "react";
import { useState, useEffect } from "react";
import './carousel.css';
import { webSkills, dataScienceSkills } from "../../services/skillsList";

export const Carousel = () => {
    const [skillsData, setSkillsData] = useState(dataScienceSkills);
    const [array, setArray] = useState(webSkills);
    return (
        <div id="accordion">
            <h1 id="title-accordion">Skills</h1>
            <h3><a href="#web">Web Development</a></h3>
            <div id="web">
                <ul id="weblist">
                    {array.map(element => (<li key={element.id}>{element.skill_name}</li>))}

                </ul>

            </div>
            <h3><a href="#dc">Data Science</a></h3>
            <div id="dc">
                <ul id="dclist">
                    {skillsData.map(element => (<li key={element.id}>{element.skill_name}</li>))}

                </ul>

            </div>

        </div>


    )
}