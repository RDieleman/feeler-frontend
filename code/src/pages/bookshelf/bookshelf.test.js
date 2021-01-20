import React from "react";
import {shallow} from "enzyme";
import BookshelfPage from "./bookshelf.page";
import {Bookshelf} from "../../models/bookshelf";
import {Book} from "../../models/book";

it("Expect to render Bookshelf page", () => {
    const books = [];

    for(let i; i < 5; i++){
        books.push(new Book(
            "test title" + i,
            "test overview" + i,
            "test isbn" + i,
            "test image url" + i
        ))
    }

    const bookshelf = new Bookshelf(1, books)

    expect(shallow(
        <BookshelfPage
            bookshelf={bookshelf}
        />)).toMatchSnapshot();
});