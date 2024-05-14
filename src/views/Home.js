import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Main } from "./Main";
import { topics } from "../services/topics";
import { Tareas } from "./Tareas";
import { Desarrollos } from "./Desarrollos";

export const Home =()=>{
    const [views, setViews]= useState(null);
    const {type} = useParams();
    

    useEffect(()=>{
        setViews(topics);
    },[]);

    if(!views){
        return <h2>Loading...</h2>;
    }

    let renderView = '';

    switch (type) {
        case "Principal":
            renderView=<Main />;
            break;
        case "Tareas":
            renderView =<Tareas />;
            break;
        case "Desarrollos":
            renderView =<Desarrollos />;
            break;    
        default:
            renderView=<Main />;
            break;
    }

    return (
        <>
        <main>
            {renderView}
        </main>
        </>
    )
}