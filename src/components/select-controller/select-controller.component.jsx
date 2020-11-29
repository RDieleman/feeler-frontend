import React from "react";
import "./selector-controller.styles.css";
import {ButtonRegular} from "../button/button-regular/button-regular.component";
import {ButtonAttention} from "../button/button-attention/button-attention.component";

export const SelectController = ({selectText, handlePreviousClicked, handleSelectClicked, handleNextClicked}) =>{
    return(
        <div className="selector-container">
            <ButtonRegular handleOnClick={handlePreviousClicked} text="Prev"/>
            <ButtonAttention handleOnClick={handleSelectClicked} text={selectText} />
            <ButtonRegular handleOnClick={handleNextClicked} text="Next" />
        </div>
    );
};
