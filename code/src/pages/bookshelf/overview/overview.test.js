import React from "react";
import {shallow} from "enzyme";
import ShelfOverviewPage from "./overview.page";

it("Expect to render Bookshelf page", () => {

    const items = ["item1", "item2", "Item3"];

    expect(shallow(
        <ShelfOverviewPage
            items={items}
        />)).toMatchSnapshot();
});