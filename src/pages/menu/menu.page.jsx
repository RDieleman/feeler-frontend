import React, {Component} from "react";
import "./menu.styles.css";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {properties} from "../../properties";
import {ButtonMainComponent} from "../../components/input/button/button-main/button-main.component";
import {ButtonSecComponent} from "../../components/input/button/button-sec/button-sec.component";

/*
    Menu page with redirects to project overview, newsfeed, and donation.
    First page after the welcome page.
 */

class MenuPage extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    //Redirect to mood page
    handleExploreClick = () => {
        this.props.history.push("/explore");
    }

    //Redirect to bookshelf
    handleBookshelfClick = () => {
        this.props.history.push("/bookshelf");
    }

    //Open extra options
    handleOptionsClick = () =>{
        console.log("Button extra options clicked...")
    }

    render() {
        return (
            <div id="page-container">
                <div id="menu-container" className="container-horizontal">

                    <PaddingComponent/>
                    <div id="menu-content" className="container-vertical">

                        <PaddingComponent/>
                        <PaddingComponent/>

                        {/*Main text*/}
                        <div id="menu-text-container" className="text-body container-vertical">
                            {properties.textMenuGreeting}
                            <PaddingComponent/>
                            {properties.textMenuContinue}
                        </div>

                        {/*User options*/}
                        <div className="container-vertical">

                            <div className="text-body">{
                                properties.textMenuAnswer}
                            </div>

                            {/*Button with redirect to explore page*/}
                            <ButtonMainComponent
                                handleOnClick={this.handleExploreClick}
                                content={properties.textMenuBtnExplore}
                                iconLocation={"images/icons/icon-explore.svg"}
                            />

                            <PaddingComponent basis="10px"/>

                            {/*Button with redirect to bookshelf page*/}
                            <ButtonMainComponent
                                handleOnClick={this.handleBookshelfClick}
                                content={properties.textMenuBtnBookshelf}
                                iconLocation={"images/icons/icon-bookshelf.svg"}
                            />

                            <PaddingComponent/>

                            {/*Button which opens extra options*/}
                            <ButtonSecComponent
                                handleOnClick={this.handleOptionsClick}
                                content={properties.textMenuBtnOtherOptions}
                                iconLocation={"images/icons/icon-options.svg"}
                                />
                        </div>
                    </div>
                    <PaddingComponent/>
                </div>

                <PaddingComponent/>
            </div>
        )
    }
}

export default MenuPage;