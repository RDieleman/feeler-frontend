import React from "react";
import "./header.styles.css";
import {PaddingComponent} from "../layout/padding/padding.component";
import {properties} from "../../properties";

export const HeaderComponent = ({}) =>{
    return(
        //Header component
        <header className="header-container container-vertical">
            <PaddingComponent basis="10px"/>

            {/*Header content*/}
            <div className="header-content container-horizontal">
                <PaddingComponent/>

                {/*App name*/}
                <div className="header-title text-title ">
                    {properties.name}
                </div>

                <PaddingComponent/>
            </div>

            <PaddingComponent basis="10px"/>
        </header>
    )
}
