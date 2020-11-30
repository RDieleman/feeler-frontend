import React, {Component} from "react";
import "./overview.styles.css";
import {SelectController} from "../../components/select-controller/select-controller.component";

class OverviewPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 0
        }
    }

    handlePreviousClicked = () => {
        console.log("Previous clicked on index " + this.state.index);
        let {index} = this.state;
        index--;
        if (index < 0) {
            index = this.props.recommendations.length - 1
        }
        this.setState({index: index})
        console.log("Index set to " + index);
    };

    handleNextClicked = () => {
        console.log("Next clicked on index " + this.state.index);
        let {index} = this.state;
        index++;
        if (index >= this.props.recommendations.length) {
            index = 0
        }
        this.setState({index: index})
        console.log("Index set to " + index);
    };

    handleSelectClicked = () => {
        console.log("Select clicked...");
    };

    render() {
        const book = this.props.recommendations[this.state.index];
        return (
            <div className="overview-container">
                <img src={book.image} alt="book cover image"/>
                <SelectController
                    handleSelectClicked={this.handleSelectClicked}
                    handlePreviousClicked={this.handlePreviousClicked}
                    handleNextClicked={this.handleNextClicked}
                />
            </div>
        )
    }
}

export default OverviewPage;