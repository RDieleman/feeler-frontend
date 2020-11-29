import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./pages/home/home.page";
import MoodPage from "./pages/mood/mood.page";
import {LoadingOverlay} from "./components/loading-overlay/loading-overlay.component";
import {Header} from "./components/header/header.component";
import {Footer} from "./components/footer/footer.component";

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    };

    toggleLoading = (loadingState) =>{
        console.log(`Toggling loading state to ${loadingState}`);
        this.setState({loading: loadingState});
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header menuEnabled={!this.state.loading} />
                    {this.state.loading ?
                        <LoadingOverlay/>
                        :
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/moods/" component={MoodPage}/>
                        </Switch>
                    }
                    <Footer/>
                </div>
            </Router>
        );
    };
}

export default App;
