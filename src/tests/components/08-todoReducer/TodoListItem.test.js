import React from "react";
import { shallow } from "enzyme";
import { demoTodos } from "../../fixtures/demoTodos";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";

describe("Prueas en <TodoListItem/>", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      index={0}
      todo={demoTodos[0]}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe llamar la funcion handleDelete", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test("debe llamar la funcion toggle", () => {
    wrapper.find("p").simulate("click");
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("debe mostrar el texto correctamente", () => {
    //contenido del parrafo
    expect(wrapper.find("p").text().trim()).toBe(`1. ${demoTodos[0].desc}`);
  });

  test("debe tener la clase complete si el TODO.dine = true", () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(<TodoListItem todo={todo} />);

    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
