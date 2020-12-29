import React from "react";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";
const { shallow } = require("enzyme");

describe("Pruebas en <TodoAdd/>", () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("No debe de llamar handleAddTodo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("debe llamar la funcion handleAddTodo", () => {
    const value = "Aprender Nodejs";

    wrapper
      .find("input")
      .simulate("change", { target: { value, name: "description" } });

    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
