import React from "react";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Prebas en <HookApp />", () => {
  test("Debe mostrar <HookApp /> correctamente", () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
