import React from "react";
import "./button-sec-number.styles.css";
import "../../button.styles.css";

export const ButtonSecNumberComponent = ({content, number, handleOnClick}) =>{
    // Secondary button
    return(
        <button className="text-body-sec button-sec" onClick={() => handleOnClick()}>
            {content}
            <div>{number}</div>
        </button>
    )
}