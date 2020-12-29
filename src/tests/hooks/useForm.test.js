const { renderHook, act } = require("@testing-library/react-hooks");
const { useForm } = require("../../hooks/useForm");

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Gonzalo",
    email: "gburgostrincado@gmail.com",
  };

  test("Debe regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("debe cambiar el valor del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          target: "Valentina",
        },
      });
    });

    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, name: "Valentina" });
  });

  test("debe de re-establecer el formulario con RESET", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          target: "Valentina",
        },
      });
      reset();
    });

    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});
