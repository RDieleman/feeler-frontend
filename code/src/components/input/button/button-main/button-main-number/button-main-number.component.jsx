import React from "react";
import "./button-main-number.styles.css";
import "../../button.styles.css";

export const ButtonMainNumberComponent = ({content, number = 0, handleOnClick}) =>{
    // Main button
    return(
        <button className="text-body-sec button-main " onClick={() => handleOnClick()}>
            {content}
            <div>{number}</div>
        </button>
    )
}