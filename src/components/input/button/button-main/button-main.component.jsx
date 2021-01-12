import React from "react";
import "./button-main.styles.css";
import "../button.styles.css";

export const ButtonMainComponent = ({content, iconLocation, handleOnClick}) =>{
    // Main button
    return(
        <button className="text-body-sec button-main " onClick={() => handleOnClick()}>
            {content}
            {/*Add icon if location is included*/}
            {(iconLocation === undefined)? "" :
                // todo: Replace with svg and set color in css file
                <img src={iconLocation} alt="btn-icon"/>}
        </button>
    )
}