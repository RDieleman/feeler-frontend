import React from "react";
import "./button-sec.styles.css";
import "../button.styles.css";

export const ButtonSecComponent = ({content, iconLocation, handleOnClick}) =>{
    // Secondary button
    return(
        <button className="text-body-sec button-sec" onClick={() => handleOnClick()}>
            {content}
            {/*Add icon if location is included*/}
            {(iconLocation === undefined)? "" :
                // todo: Replace with svg and set color in css file
                <img src={iconLocation} alt="btn-icon"/>}
        </button>
    )
}