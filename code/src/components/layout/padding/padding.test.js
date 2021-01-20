import React from "react";
import {shallow} from "enzyme";
import {PaddingComponent} from "./padding.component";

it("Expect to render Padding component", () => {

    expect(shallow(
        <PaddingComponent

        />)).toMatchSnapshot();
});