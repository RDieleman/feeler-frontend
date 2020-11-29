import React, {Component} from "react";
import "./home.styles.css"
import {ButtonAttention} from "../../components/button/button-attention/button-attention.component";

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    handleConnectPress = () =>{
        console.log("Button connect pressed...")
        this.props.history.push("/moods/");
    }

    render() {
        return (
            <div className="home-container">
                <ButtonAttention
                    handleOnClick={this.handleConnectPress}
                    text="Connect with Goodreads"/>
            </div>
        );
    }
}

export default HomePage;