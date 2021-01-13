import React from "react";
import "./loading.styles.css";

export const LoadingComponent = () =>{
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