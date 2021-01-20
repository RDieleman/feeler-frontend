import React from "react";
import {shallow} from "enzyme";
import {HeaderComponent} from "./header.component";

it("Expect to render Header component", () => {
    expect(shallow(
        <HeaderComponent
            handleInstallClicked={() => console.log("Header clicked")}
            installIsAvailable={true}
        />)).toMatchSnapshot();
});