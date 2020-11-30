import React from "react";
import "./logo.styles.css"

export const Logo = () =>{
    return(
        <div className="logo-container">
            <div className="title">Feeler</div>
            <div className="subtitle">
                A book for every <span className="accent">mood</span>
            </div>
        </div>
    )
}