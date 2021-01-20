import React from "react";
import {shallow} from "enzyme";
import {ButtonMainComponent} from "./button-main.component";

it("Expect to render ButtonMain component", () => {
    expect(shallow(
        <ButtonMainComponent
            handleOnClick={() => "ButtonMain clicked"}
            content="ButtonMain"
            iconLocation="test"
        />)).toMatchSnapshot();
});