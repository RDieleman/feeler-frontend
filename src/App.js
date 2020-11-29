import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./pages/home/home.page";
import MoodPage from "./pages/mood/mood.page";
import {LoadingOverlay} from "./components/loading-overlay/loading-overlay.component";
import {Header} from "./components/header/header.component";
import {Footer} from "./components/footer/footer.component";
import {getAvailableMoods} from "./services/api.service";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            moods: [],
            user: undefined
        };
    };

    toggleLoading = (loadingState) => {
        console.log(`Toggling loading state to ${loadingState}`);
        this.setState({loading: loadingState});
    }

    componentDidMount() {
        this.retrieveAvailableMoods();
    }

    retrieveAvailableMoods = () => {
        this.toggleLoading(true);
        console.log("Retrieving available moods...");
        getAvailableMoods().then((response) => {
            if (response !== undefined && response.data != null) {
                console.log(response.data);
                this.setState({moods: response.data});
            }
        }).finally(() => this.toggleLoading(false));
    }

    connectUser = () => {

    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header menuEnabled={!this.state.loading}/>
                    {this.state.loading ?
                        <LoadingOverlay/>
                        :
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/moods/" render={(props) => <MoodPage
                                toggleLoading={this.toggleLoading}
                                availableMoods={this.state.moods}
                                {...props}/>
                            }/>
                        </Switch>
                    }
                    <Footer/>
                </div>
            </Router>
        );
    };
}

export default App;
