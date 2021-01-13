import React from "react";
import "./header.styles.css";
import {PaddingComponent} from "../layout/padding/padding.component";
import {properties} from "../../properties";
import {ButtonIconComponent} from "../input/button/button-icon/button-icon.component";

export const HeaderComponent = ({installIsAvailable, handleInstallClicked}) =>{
    return(
        //Header component
        <header className="header-container container-vertical"
        >
            <PaddingComponent basis="10px"/>

            {/*Header content*/}
            <div className="header-content container-horizontal">
                <PaddingComponent/>

                {/*App name*/}
                <div
                    className="header-title text-title "
                    onClick={() => window.location.href = "/"}>
                    {properties.name}
                </div>

                {/*Show install button if prompt is available*/}
                {(installIsAvailable) ?
                    <ButtonIconComponent
                        handleOnClick={() => handleInstallClicked()}
                        iconUrl="/images/icons/icon-install.svg"/>:""}


                <PaddingComponent/>
            </div>

            <PaddingComponent basis="10px"/>
        </header>
    )
}
