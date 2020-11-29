import React from "react";
import "./menu.styles.css";
import {ButtonAttention} from "../button/button-attention/button-attention.component";
import {ButtonRegular} from "../button/button-regular/button-regular.component";

export const Menu = ({}) =>{
    return(
        <div className="menu-container">
            <ButtonAttention text="test attention" handleOnClick={() => console.log("button attention press")}/>
            <ButtonRegular text="test regular" handleOnClick={() => console.log("button press")}/>
            <ButtonRegular text="test regular" handleOnClick={() => console.log("button press")}/>
            <ButtonRegular text="test regular" handleOnClick={() => console.log("button press")}/>
        </div>
    )
}