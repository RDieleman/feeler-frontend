import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./pages/home/home.page";
import MoodPage from "./pages/mood/mood.page";
import {LoadingOverlay} from "./components/loading-overlay/loading-overlay.component";
import {Header} from "./components/header/header.component";
import {Footer} from "./components/footer/footer.component";
import {getAvailableMoods, getRecommendations, getUser} from "./services/api.service";
import OverviewPage from "./pages/overview/overview.page";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            moods: [],
            user: undefined,
            selectedIndex: 0,
            recommendations: []
        };
    };

    toggleLoading = (loadingState) => {
        console.log(`Toggling loading state to ${loadingState}`);
        this.setState({loading: loadingState});
    }

    selectMood = (index) => {
        console.log(`Mood selected: ${this.state.moods[index]}`)
        this.setState({selectedIndex: index})
        this.retrieveRecommendations();
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

    retrieveRecommendations = () =>{
        console.log("Retrieving recommendations...");
        this.toggleLoading(true);
        const {moods, selectedIndex} = this.state;
        getRecommendations(moods[selectedIndex], this.state.user.id).then((response) => {
            if (response !== undefined && response.data != null) {
                console.log(response.data);
                this.setState({recommendations: response.data})
            }
        }).finally(() => this.toggleLoading(false));
    }

    handleConnectUser = () => {
        this.toggleLoading(true);
        console.log("Retrieving user info...");
        getUser("testId").then((response) => {
            if (response !== undefined && response.data != null) {
                console.log(response.data);
                this.setState({user: response.data})
            }
        }).finally(() => this.toggleLoading(false));
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
                            <Route exact path="/" render={(props) => <HomePage
                                handleConnectUser={this.handleConnectUser}
                                {...props}/>
                            }/>
                            <Route exact path="/moods/" render={(props) => <MoodPage
                                toggleLoading={this.toggleLoading}
                                availableMoods={this.state.moods}
                                selectMood={this.selectMood}
                                {...props}/>
                            }/>
                            <Route exact path="/overview/" render={(props) => <OverviewPage
                                selectedMood={this.state.moods[this.state.selectedIndex]}
                                recommendations={this.state.recommendations}
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
