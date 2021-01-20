import React from "react";
import { shallow } from "enzyme";
import {BookOverview} from "./book-overview.component";
import {Book} from "../../models/book";

const books = [
    new Book(
        "test title 1",
        "test overview 1",
        "12345",
        "test image url 1"
    ),
    new Book(
        "test title 2",
        "test overview 2",
        "12345",
        "test image url 2"
    )
]

it("Expect to render Book Overview component", () =>{
    expect(shallow(
        <BookOverview
            handleOnClick={() => console.log("Book clicked")}
            books={books}
    />)).toMatchSnapshot();
});


