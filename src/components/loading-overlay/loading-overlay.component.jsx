import React from "react";
import "./loading-overlay.styles.css";

export const LoadingOverlay = ({}) =>{
    return(
        <div className="loading-container">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}