import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import {
    handleAddBook,
    handleExplore,
    handleGetMoods,
    handleGetUser,
    handleRemoveBook,
    handleUpdateBook
} from "./services/api.service";
import MenuPage from "./pages/menu/menu.page";
import {HeaderComponent} from "./components/header/header.component";
import ExplorePage from "./pages/explore/explore.page";
import OverviewPage from "./pages/explore/overview/overview.page";
import ExploreOverviewPage from "./pages/explore/overview/overview.page";
import DetailPage from "./pages/detail/detail.page";
import {LoadingComponent} from "./components/loading/loading.component";
import {AddBookDTO, RemoveBookDTO, UpdateBookDTO} from "./models/dto";
import BookshelfPage from "./pages/bookshelf/bookshelf.page";
import ReadOverviewPage from "./pages/bookshelf/overview/overview.page";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deferredPrompt: null, //Install prompt filled once supplied

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

        //Setup the service worker if possible
        if ('serviceWorker' in navigator) {
            await navigator.serviceWorker
                .register("/serviceWorker.js")
                .then(() => {
                    console.log("Service worker registered");
                });
        }

        /*
            Add an event listener to catch the install prompt.
             Once caught, prevent the popup and set the state, which enables the download button in the header.
            This usually takes a few seconds to appear.
        */
        window.addEventListener("beforeinstallprompt", (event) => {
            console.log("beforeinstallprompt fired and caught", event);
            event.preventDefault();
            this.setState({deferredPrompt: event});
            return false;
        })

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

    /*
    Create the install prompt after it has been caught.
    Function is passed into the header and called when install button is pressed.
    If no prompt is available nothing happens.
 */
    handleCreateInstallPrompt = () => {
        let {deferredPrompt} = this.state;

        if (deferredPrompt) {
            deferredPrompt.prompt();

            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'dismissed') {
                    console.log('User cancelled installation');
                } else {
                    console.log('User added to homescreen');
                }
            })
        } else {
            console.log("No prompt available");
        }

        //clear deferredPrompt
        this.setState({deferredPrompt: null})
    }

    handleAddToShelf = (book) => {
        handleAddBook(new AddBookDTO(
            this.state.user.bookshelf.id,
            book.isbn
        )).then(bookshelf => {
            console.log("new shelf", bookshelf)
            let {user} = this.state;
            user.bookshelf = bookshelf;
            this.setState({user: user})
        });
    }

    handleRemoveFromShelf = (book) => {
        handleRemoveBook(new RemoveBookDTO(
            this.state.user.bookshelf.id,
            book.isbn
        )).then(bookshelf => {
            let {user} = this.state;
            user.bookshelf = bookshelf;
            this.setState({user: user})
        });
    }

    handleUpdateStatus = (book, status) => {
        handleUpdateBook(new UpdateBookDTO(
            this.state.user.bookshelf.id,
            book.isbn,
            status
        )).then(bookshelf => {
            let {user} = this.state;
            user.bookshelf = bookshelf;
            this.setState({user: user})
        });
    }

    render() {
        return (
            <Router>
                <div className="App">
                    {/*Display the loading page if loading state is active*/}
                    {(this.state.isLoading) ?
                        <LoadingComponent/>
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
                                    {...props}/>}/>

                                {/*Books detail page*/}
                                <Route path="/detail/:isbn" render={(props) => <DetailPage
                                    bookshelf={this.state.user.bookshelf}
                                    handleAddToShelf={this.handleAddToShelf}
                                    handleRemoveFromShelf={this.handleRemoveFromShelf}
                                    handleUpdateStatus={this.handleUpdateStatus}
                                    {...props}/>}/>

                                {/*Bookshelf menu page*/}
                                <Route exact path="/shelf" render={(props) => <BookshelfPage
                                    bookshelf={this.state.user.bookshelf}
                                    {...props}/>}/>

                                {/*Bookshelf overviews*/}
                                <Route exact path="/shelf/read" render={(props) => <ReadOverviewPage
                                    items={this.state.user.bookshelf.getRead()}
                                    {...props}/>}/>

                                <Route exact path="/shelf/reading" render={(props) => <ReadOverviewPage
                                    items={this.state.user.bookshelf.getReading()}
                                    {...props}/>}/>

                                <Route exact path="/shelf/unread" render={(props) => <ReadOverviewPage
                                    items={this.state.user.bookshelf.getUnread()}
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
