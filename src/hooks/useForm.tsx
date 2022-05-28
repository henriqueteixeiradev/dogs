import { useState } from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/,
    message: "Deve conter no mínimo 8 caracteres e pelo menos 1 número",
  },
};

export function useForm(type: string) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | any>(null);

  function validate(value: any) {
    if (type === "") return true;
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(true);
      return true;
    }
  }

  function onChange({ target }: string | number | any) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}
