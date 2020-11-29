import React, {Component} from "react";
import "./mood.styles.css";
import {getAvailableMoods} from "../../services/api.service";

class MoodPage extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        console.log("Rendering mood page...")
        return (
            <div className="mood-container">
                <ul>
                    {this.props.availableMoods.map(m =>{
                        return <li>{m}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default MoodPage;