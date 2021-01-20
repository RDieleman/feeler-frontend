import React from "react";
import {shallow} from "enzyme";
import {ButtonSecNumberComponent} from "./button-sec-number.component";

it("Expect to render ButtonSecNumber component", () => {
    expect(shallow(
        <ButtonSecNumberComponent
            handleOnClick={() => "ButtonSecNumber clicked"}
            number={10}
            content="test"
        />)).toMatchSnapshot();
});