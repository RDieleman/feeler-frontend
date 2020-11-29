import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./pages/home/home.page";
import {Header} from "./components/header/header.component";
import {Footer} from "./components/footer/footer.component";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
