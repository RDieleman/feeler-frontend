import React, {Component} from "react";
import "./overview.styles.css";
import {handleGetBook} from "../../../services/api.service";
import {LoadingComponent} from "../../../components/loading/loading.component";
import {BookOverview} from "../../../components/book-overview/book-overview.component";
import {PaddingComponent} from "../../../components/layout/padding/padding.component";
import {ButtonMainComponent} from "../../../components/input/button/button-main/button-main.component";

class ShelfOverviewPage extends Component{

    constructor(props, context) {
        super(props, context);

        this.state = {
            books: [],
            loading: true
        };
    };

    async componentDidMount() {
        await this.handleLoadBooks();
        this.setState({loading: false});
    }

    handleLoadBooks = async () =>{
        console.log("this", this);
        const {items} = this.props;
        const books = [];

        //Get Book data for all shelf items
        for(const i of items){
            await handleGetBook(i.isbn)
                .then(b => books.push(b));
        }

        this.setState({books: books});
    }

    handleBookClicked = (book) =>{
        this.props.history.push(`/detail/${book.isbn}`);
    }

    render() {
        return (
            <div id="page-container">
                {(this.state.loading)?
                    <LoadingComponent/>:
                    <div className="container-vertical">
                        <BookOverview
                            books={this.state.books}
                            handleOnClick={this.handleBookClicked}
                        />
                    </div>}
            </div>
        );
    }
}

export default ShelfOverviewPage;