import React from "react";
import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";
const { act } = require("@testing-library/react-hooks");

describe("Pruebas en <RealExampleRef/>", () => {
  const wrapper = shallow(<RealExampleRef />);

  test("debe msotrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
  });

  test("debe mostrar el componente <MultipleCustomHooks />", () => {
    wrapper.find("button").simulate("click");

    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
