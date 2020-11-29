import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./pages/home/home.page";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
