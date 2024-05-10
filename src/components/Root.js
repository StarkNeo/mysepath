import React from "react";
import { Outlet } from "react-router-dom";
import { TitleNav } from "./Navigation/TitleNav";

export const Root = ()=>{
    
    return(
        <>
        <TitleNav />
        <Outlet />

        </>
        
    )
}