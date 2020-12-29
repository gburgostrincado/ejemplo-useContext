const {
  todoReducer,
} = require("../../../components/08-useReducer/todoReducer");
const { demoTodos } = require("../../fixtures/demoTodos");

describe("pruebas en todoReducer", () => {
  test("debe retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });
  test("debe agregar un TODO", () => {
    const action = {
      type: "add",
      payload: {
        id: 3,
        desc: "Aprender React",
        done: false,
      },
    };

    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, action.payload]);
  });

  test("debe eliminar un TODO", () => {
    //action.payload = ID del TODO
    const action = {
      type: "delete",
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[1]]);
  });

  test("debe hacer el toggle del TODO", () => {
    const action = {
      type: "toggle",
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);
    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
