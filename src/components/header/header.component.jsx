import React from "react";
import "./header.styles.css";
import {Logo} from "../logo/logo.component";
import {Menu} from "../menu/menu.component";

export const Header = ({}) => {
    return (
        <header>
            <Logo className="logo"/>
            <Menu className="menu"/>
        </header>
    )
}