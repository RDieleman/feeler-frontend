import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomeStyles from "./pages/home/home.styles";
import {Header} from "./components/header/header.component";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomeStyles}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
