import React from "react";
import {shallow} from "enzyme";
import {ButtonMainNumberComponent} from "./button-main-number.component";

it("Expect to render ButtonMainNumber component", () => {
    expect(shallow(
        <ButtonMainNumberComponent
            handleOnClick={() => "Button MainNumber clicked"}
            content="test"
            number={10}
        />)).toMatchSnapshot();
});