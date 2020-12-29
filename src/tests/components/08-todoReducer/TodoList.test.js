import React from "react";
import { shallow } from "enzyme";
import { demoTodos } from "../../fixtures/demoTodos";
import { TodoList } from "../../../components/08-useReducer/TodoList";

describe("Pruebas en <TodoList />", () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();
  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe tener dos <TodoListItem />", () => {
    expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);
    expect(wrapper.find("TodoListItem").at(0).prop("handleDelete")).toEqual(
      expect.any(Function)
    );
  });
});
