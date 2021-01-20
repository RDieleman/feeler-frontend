import React from "react";
import {shallow} from "enzyme";
import ExploreOverviewPage from "./overview.page";

it("Expect to render ExploreOverview page", () => {

    expect(shallow(
        <ExploreOverviewPage

        />)).toMatchSnapshot();
});