import React, {Component} from "react";
import "./detail.styles.css";
import {handleGetBook} from "../../services/api.service";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {LoadingComponent} from "../../components/loading/loading.component";
import {ButtonMainComponent} from "../../components/input/button/button-main/button-main.component";
import {ButtonSecComponent} from "../../components/input/button/button-sec/button-sec.component";

class DetailPage extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            book: null
        };
    };

    async componentDidMount() {
        try{
            await this.handleRetrieveBookInfo();
        }
        catch(e){
            console.log("Failed to retrieve book data");
        }
    }

    handleRetrieveBookInfo = async () => {
        let isbn = "";
        try{
            isbn = this.props.match.params.isbn;
        }
        catch (e){
            console.log("No isbn provided as path parameter.");
            isbn = this.props.isbn;
        }
        try{
            console.log("Retrieving book:", this);
            const book = await handleGetBook(isbn);
            this.setState({book: book})
        }catch{
            console.log("An error occurred while retrieving book data");
            return null;
        }
    }

    getButtons = () => {
        const {book} = this.state;

        const {
            bookshelf,
            handleAddToShelf,
            handleRemoveFromShelf,
            handleUpdateStatus

        } = this.props;

        //Get item from shelf if it exists
        let shelfItem = null;
        bookshelf.content.forEach(i => {
            if (i.isbn === book.isbn) {
                shelfItem = i;
            }
        });

        if (shelfItem) {
            //Book is present on shelf
            switch (shelfItem.status) {
                //Finished the book
                case "READ":
                    return <ButtonSecComponent
                        handleOnClick={() => handleRemoveFromShelf(book)}
                        content="Remove from bookshelf"
                        iconLocation={"/images/icons/icon-remove.svg"}
                    />
                    //Currently reading the book
                case "READING":
                    return <div className="container-vertical">
                        <ButtonMainComponent
                            handleOnClick={() => handleUpdateStatus(book, 'READ')}
                            content="Finish reading"
                            iconLocation={"/images/icons/icon-finish.svg"}
                        />
                        <PaddingComponent basis="10px"/>
                        <ButtonSecComponent
                            handleOnClick={() => handleUpdateStatus(book, 'UNREAD')}
                            content="Stop reading"
                            iconLocation={"/images/icons/icon-stop-reading.svg"}
                        />
                            <PaddingComponent basis="10px"/>
                        <ButtonSecComponent
                            handleOnClick={() => handleRemoveFromShelf(book)}
                            content="Remove from bookshelf"
                            iconLocation={"/images/icons/icon-remove.svg"}
                        />
                    </div>
                //Not yet reading the book
                case "UNREAD":
                default:
                    return <div className="container-vertical">
                        <ButtonMainComponent
                            handleOnClick={() => handleUpdateStatus(book, 'READING')}
                            content="Start reading"
                            iconLocation={"/images/icons/icon-start-reading.svg"}
                        />
                        <PaddingComponent basis="10px"/>
                        <ButtonSecComponent
                            handleOnClick={() => handleRemoveFromShelf(book)}
                            content="Remove from bookshelf"
                            iconLocation={"/images/icons/icon-remove.svg"}
                        />
                    </div>
            }
        }
        //Book not present on shelf
        else{
            return <ButtonMainComponent
                handleOnClick={() => handleAddToShelf(book)}
                content="Add to bookshelf"
                iconLocation={"/images/icons/icon-add.svg"}
            />
        }
    }

    render() {
        const {book} = this.state;

        return (
            <div id="page-container">
                {(book) ?
                    <div className="detail-container container-vertical">
                        <img src={book.imageUrl} alt={book.title}/>

                        <div className="container-horizontal">
                            <PaddingComponent/>
                            <div className="container-vertical">
                                <PaddingComponent/>
                                {
                                    this.getButtons()
                                }
                                <PaddingComponent/>
                                <div className="text-body">
                                    {book.title}
                                </div>
                                <PaddingComponent/>
                                <div className="text-body-sec">
                                    {book.overview}
                                </div>
                                <PaddingComponent/>
                            </div>
                            <PaddingComponent/>
                        </div>
                    </div> :
                    <LoadingComponent/>}
            </div>
        )
    }
}

export default DetailPage;