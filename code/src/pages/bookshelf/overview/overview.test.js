import React from "react";
import {shallow} from "enzyme";
import ShelfOverviewPage from "./overview.page";

it("Expect to render Bookshelf page", () => {

    expect(shallow(
        <ShelfOverviewPage

        />)).toMatchSnapshot();
});