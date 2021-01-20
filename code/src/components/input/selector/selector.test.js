import React from "react";
import {shallow} from "enzyme";
import SelectorComponent from "./selector.component";

it("Expect to render Selector component", () => {
    const children = ["test1", "test2", "test3"];
    expect(shallow(
        <SelectorComponent
            options={children}
        />)).toMatchSnapshot();
});