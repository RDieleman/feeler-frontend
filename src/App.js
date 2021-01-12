import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./pages/home/home.page";
import MoodPage from "./pages/mood/mood.page";
import {LoadingOverlay} from "./components/loading-overlay/loading-overlay.component";
import {Header} from "./components/header/header.component";
import {Footer} from "./components/footer/footer.component";
import OverviewPage from "./pages/overview/overview.page";
import {handleGetMoods, handleGetUser} from "./services/api.service";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            moods: undefined,
            user: undefined,
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

    async componentDidMount() {
        this.toggleLoading(true);
        try{
            const user = await handleGetUser(1);
            const moods = await handleGetMoods();

            this.setState({
                user: user,
                moods: moods
            });
        }finally {
            this.toggleLoading(false);
        }
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
                        </Switch>
                    }
                    <Footer/>
                </div>
            </Router>
        );
    };
}

export default App;
