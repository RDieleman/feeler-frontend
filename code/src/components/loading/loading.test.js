import React from "react";
import {shallow} from "enzyme";
import {LoadingComponent} from "./loading.component";

it("Expect to render Loading component", () => {

    expect(shallow(
        <LoadingComponent

        />)).toMatchSnapshot();
});