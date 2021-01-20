import React from "react";
import {shallow} from "enzyme";
import {ButtonIconComponent} from "./button-icon.component";

it("Expect to render ButtonIcon component", () => {
    expect(shallow(
        <ButtonIconComponent
            handleOnClick={() => "Button icon clicked"}
            iconUrl={""}
        />)).toMatchSnapshot();
});