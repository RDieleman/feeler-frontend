import React from "react";
import {shallow} from "enzyme";
import {Book} from "../../models/book";
import DetailPage from "./detail.page";

it("Expect to render Detail page", () => {
    expect(shallow(
        <DetailPage
            isbn="test"
        />)).toMatchSnapshot();
});