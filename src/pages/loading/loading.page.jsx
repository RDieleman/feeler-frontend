import React, {Component} from "react";
import "./loading.styles.css";

/*
    Page that will be displayed when loading state is active.
    Page replaces the whole app component so resources can be safely loaded.
    Only contains the logo and title of the app.
 */

class LoadingPage extends Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div >
                Loading...
            </div>
        );
    }
}

export default LoadingPage;