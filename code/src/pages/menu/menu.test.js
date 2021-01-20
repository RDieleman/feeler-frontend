import React from "react";
import {shallow} from "enzyme";
import MenuPage from "./menu.page";

it("Expect to render Menu page", () => {

    expect(shallow(
        <MenuPage

        />)).toMatchSnapshot();
});