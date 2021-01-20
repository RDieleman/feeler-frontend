import React from "react";
import {shallow} from "enzyme";
import ExplorePage from "./explore.page";

it("Expect to render Explore page", () => {
    const moods = ["bad", "good", "worse"];

    expect(shallow(
        <ExplorePage
            moods={moods}
        />)).toMatchSnapshot();
});