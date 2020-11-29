import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./pages/home/home.page";
import MoodPage from "./pages/mood/mood.page";
import {Header} from "./components/header/header.component";
import {Footer} from "./components/footer/footer.component";

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {

        };
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/moods/" component={MoodPage}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    };
}

export default App;
