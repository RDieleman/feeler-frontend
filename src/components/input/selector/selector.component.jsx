import React, {Component} from "react";
import "./selector.styles.css";
import {PaddingComponent} from "../../layout/padding/padding.component";
import {ButtonIconComponent} from "../button/button-icon/button-icon.component";

class SelectorComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        };
    };

    handleSetNext = () => {
        //Set next index
        let nextIndex = this.state.selectedIndex + 1;

        //Set to start of array if there is no next object
        if (this.state.selectedIndex === this.props.options.length - 1) {
            nextIndex = 0;
        }

        //Set new state
        this.props.handleSelectionChanged(this.props.options[nextIndex]);
        this.setState({selectedIndex: nextIndex});
    }

    handleSetPrevious = () => {
        //Set next index
        let nextIndex = this.state.selectedIndex - 1;

        //Set to end of array if first object is currently selected
        if (this.state.selectedIndex === 0) {
            nextIndex = this.props.options.length - 1;
        }

        //Set new state
        this.props.handleSelectionChanged(this.props.options[nextIndex]);
        this.setState({selectedIndex: nextIndex});
    }

    render() {
        return (
            <div className="selector-container container-vertical">
                <div className="selector-content-container container-horizontal">
                    {/*Button prev*/}
                    <ButtonIconComponent
                        handleOnClick={this.handleSetPrevious}
                        iconUrl="images/icons/icon-previous.svg"
                    />

                    <PaddingComponent basis="10px"/>

                    {/*Current option*/}
                    <div className="selector-content container-horizontal text-title">
                        {this.props.options[this.state.selectedIndex]}
                    </div>

                    <PaddingComponent/>
                    {/*Button next*/}
                    <ButtonIconComponent
                        handleOnClick={this.handleSetNext}
                        iconUrl="images/icons/icon-next.svg"/>
                </div>
            </div>
        )
    }
}

export default SelectorComponent;