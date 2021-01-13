import React, {Component} from 'react';
import "./explore.styles.css";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {properties} from "../../properties";
import SelectorComponent from "../../components/input/selector/selector.component";
import {ButtonMainComponent} from "../../components/input/button/button-main/button-main.component";

class ExplorePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedMood: null
        };
    };

    handleContinueClick = () =>{
        console.log("pushing history", this.state.selectedMood);
        this.props.history.push(`/explore/overview/${this.state.selectedMood}`);
    }

    handleSelectionChanged = (selection) =>{
        console.log("selection changed", selection);
        this.setState({selectedMood: selection}, () =>{
            console.log("state set", this.state);
        });
    }

    render() {
        return (
            <div id="page-container">
                <div id="explore-container" className="container-horizontal">
                    <PaddingComponent/>
                    <div id="explore-content" className="container-vertical">

                        <PaddingComponent/>
                        <PaddingComponent/>

                        {/*Main text*/}
                        <div id="explore-text-container" className="text-body container-vertical">
                            {properties.textExploreGreeting}
                            <PaddingComponent/>
                            {properties.textExploreContinue}
                        </div>

                        {/*User options*/}
                        <div className="container-vertical">
                            <div className="text-body">
                                {properties.textExploreAnswer}
                            </div>
                            <PaddingComponent basis="10px"/>
                            <SelectorComponent
                                options={this.props.moods}
                                handleSelectionChanged={this.handleSelectionChanged}
                            />
                            <PaddingComponent basis="5px"/>
                            <ButtonMainComponent
                                handleOnClick={this.handleContinueClick}
                                content={properties.textExploreBtnContinue}
                            />
                        </div>

                        <PaddingComponent/>
                    </div>
                    <PaddingComponent/>
                </div>

            </div>
        );
    }
}

export default ExplorePage;