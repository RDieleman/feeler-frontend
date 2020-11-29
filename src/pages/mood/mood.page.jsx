import React, {Component} from "react";
import "./mood.styles.css";
import {SelectController} from "../../components/select-controller/select-controller.component";

class MoodPage extends Component {
    constructor(props) {
        super(props);
        console.log(this);
        this.state = {
            index: 0,
            size: props.availableMoods.length
        }
    };

    handlePreviousClicked = () => {
        console.log("Previous clicked...");
        let {index} = this.state;
        index--;
        if(index < 0){index = this.state.size - 1}
        this.setState({index: index})
    };

    handleNextClicked = () => {
        console.log("Next clicked...");
        let {index} = this.state;
        index++;
        if(index >= this.state.size){index = 0}
        this.setState({index: index})
    };

    handleSelectClicked = () => {
        console.log("Select clicked...");
        this.props.selectMood(this.state.index);
    };

    render() {
        return (
            <div className="mood-container">
                <div className="mood-context">
                    I want to feel...
                </div>
                <div className="mood-title">
                    {this.props.availableMoods[this.state.index]}
                </div>
                <div className="mood-controller">
                    <SelectController
                        selectText="Select Mood"
                        handleNextClicked={this.handleNextClicked}
                        handlePreviousClicked={this.handlePreviousClicked}
                        handleSelectClicked={this.handleSelectClicked}
                    />
                </div>

            </div>
        );
    }
}

export default MoodPage;