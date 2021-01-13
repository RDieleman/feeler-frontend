import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import {handleExplore, handleGetMoods, handleGetUser} from "./services/api.service";
import LoadingPage from "./pages/loading/loading.page";
import MenuPage from "./pages/menu/menu.page";
import {HeaderComponent} from "./components/header/header.component";
import ExplorePage from "./pages/explore/explore.page";
import OverviewPage from "./pages/explore/overview/overview.page";
import ExploreOverviewPage from "./pages/explore/overview/overview.page";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            moods: undefined,
            user: undefined,
        };
    };

    toggleLoading = (loadingState) => {
        console.log(`Toggling loading state to ${loadingState}`);
        this.setState({isLoading: loadingState});
    }

    async componentDidMount() {
        this.toggleLoading(true);
        try {
            const user = await handleGetUser(1);
            const moods = await handleGetMoods();

            this.setState({
                user: user,
                moods: moods
            });
        } finally {
            this.toggleLoading(false);
        }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    {/*Display the loading page if loading state is active*/}
                    {(this.state.isLoading) ?
                        <LoadingPage/>
                        :
                        // Content of the application
                        <div id="main-container" className="container-vertical">
                            {/*Global header*/}
                            <HeaderComponent/>

                            {/*Switch to handle routing*/}
                            <Switch>

                                {/*Menu page*/}
                                <Route exact path="/" component={MenuPage}/>

                                {/*Explore page*/}
                                <Route exact path="/explore" render={(props) => <ExplorePage
                                    moods={this.state.moods}
                                    {...props}/>}/>
                                {/*Explore overview page*/}
                                <Route path="/explore/overview/:mood" render={(props) => <ExploreOverviewPage
                                    handleToggleLoad={this.toggleLoading}
                                    {...props}/>}/>
                            </Switch>
                        </div>
                    }
                </div>
            </Router>
        );
    };
}

export default App;
