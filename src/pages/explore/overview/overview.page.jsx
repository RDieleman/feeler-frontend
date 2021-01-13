import React, {Component} from "react";
import "./overview.styles.css";
import {handleExplore} from "../../../services/api.service";
import {GetExploreResultDTO} from "../../../models/dto";
import {BookOverview} from "../../../components/book-overview/book-overview.component";
import {ButtonMainComponent} from "../../../components/input/button/button-main/button-main.component";
import {PaddingComponent} from "../../../components/layout/padding/padding.component";
import {LoadingComponent} from "../../../components/loading/loading.component";

class ExploreOverviewPage extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            page: 0,
            books: [],
            loading: true
        };
    };

    async componentDidMount() {
        await this.handleGetNextPage();
        this.setState({loading: false})
    }

    handleGetNextPage = async () => {
        const page = this.state.page + 1;
        const dto = new GetExploreResultDTO(
            this.props.match.params.mood,
            page
        );

        const newBooks = await handleExplore(dto);
        console.log("Retrieved books", newBooks);

        const books = [...this.state.books];
        books.push(...newBooks);

        this.setState({
            books: books,
            page: page
        });
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

                    {/*Load button*/}
                    {this.state.books.length > 0 ?
                        <div className="container-horizontal">
                            <PaddingComponent/>
                            <div className="container-vertical">
                                <PaddingComponent basis="10px"/>
                                <ButtonMainComponent
                                    content="Load more..."
                                    handleOnClick={this.handleGetNextPage}
                                />
                                <PaddingComponent basis="10px"/>
                            </div>
                            <PaddingComponent/>
                        </div>:
                        ""}
                </div>}
            </div>
        )
    }
}

export default ExploreOverviewPage;