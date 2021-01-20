import React from "react";
import {shallow} from "enzyme";
import {ButtonSecComponent} from "./button-sec.component";

it("Expect to render ButtonSec component", () => {
    expect(shallow(
        <ButtonSecComponent
            handleOnClick={() => "ButtonSec Clicked"}
            content="test"
            iconLocation="test"
        />)).toMatchSnapshot();
});