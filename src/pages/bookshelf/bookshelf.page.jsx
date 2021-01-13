import React, {Component} from "react";
import "./bookshelf.styles.css";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {properties} from "../../properties";
import {
    ButtonMainNumberComponent
} from "../../components/input/button/button-main/button-main-number/button-main-number.component";
import {ButtonSecNumberComponent} from "../../components/input/button/button-sec/button-sec-number/button-sec-number.component";

class BookshelfPage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    };

    //redirect to finished books
    handleFinishedClick = () => {
        this.props.history.push("/shelf/read");
    }

    //Redirect to currently reading
    handleReadingClick = () => {
        this.props.history.push("/shelf/reading");
    }

    //Redirect to unread
    handleUnreadClick = () => {
        this.props.history.push("/shelf/unread");
    }

    render() {
        const {bookshelf} = this.props;

        const read = [];
        const reading = [];
        const unread = [];

        bookshelf.content.forEach(i => {
            switch (i.status) {
                case "READ":
                    read.push(i);
                    return;
                case "READING":
                    reading.push(i);
                    return;
                case "UNREAD":
                default:
                    unread.push(i);
                    break;
            }
        })

        return (
            <div id="page-container">
                <div id="shelf-container" className="container-horizontal">

                    <PaddingComponent/>
                    <div id="shelf-content" className="container-vertical">

                        <PaddingComponent/>
                        <PaddingComponent/>

                        {/*Main text*/}
                        <div id="shelf-text-container" className="text-body container-vertical">
                            {properties.textShelfGreeting}
                        </div>

                        {/*User options*/}
                        <div className="container-vertical">

                            <div className="text-body">{
                                properties.textShelfAnswer}
                            </div>

                            {/*Button with redirect to read page*/}
                            <ButtonMainNumberComponent
                                handleOnClick={this.handleFinishedClick}
                                content={properties.textShelfBtnRead}
                                number={read.length}
                            />

                            <PaddingComponent basis="10px"/>

                            {/*Button with redirect to reading page*/}
                            <ButtonMainNumberComponent
                                handleOnClick={this.handleReadingClick}
                                content={properties.textShelfBtnReading}
                                number={reading.length}
                            />

                            <PaddingComponent/>

                            {/*Button with redirect to unread page*/}
                            <ButtonSecNumberComponent
                                handleOnClick={this.handleUnreadClick}
                                content={properties.textShelfBtnUnread}
                                number={unread.length}
                            />
                        </div>
                    </div>
                    <PaddingComponent/>
                </div>

                <PaddingComponent/>
            </div>
        )
    }
}

export default BookshelfPage;