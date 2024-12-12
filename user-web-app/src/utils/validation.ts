import {
  string,
  pattern,
  size,
  assert,
  StructError,
  optional,
} from "superstruct";

export const EmailValidation = () => {
  const emailMatcher =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return pattern(size(string(), 1, 320), emailMatcher);
};

export const PasswordValidation = () => {
  //   const passwordMatcher = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
  //   return pattern(string(), passwordMatcher);
  return size(string(), 12, 256);
};

export const PhoneValidation = () => {
  const passwordMatcher =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return optional(pattern(string(), passwordMatcher));
};

export const validateInput = (
  input: HTMLInputElement,
  inputs: NodeListOf<HTMLInputElement>,
) => {
  const type = input.dataset.type;
  const value = input.value.length ? input.value : undefined;
  if (!value && !input.required) {
    return true;
  }
  try {
    switch (type) {
      case "password": {
        assert(
          value,
          PasswordValidation(),
          //   "- Password must contain at least 8 characters\n- Password must contain one capital letter\n- Password must contain one lowercase letter\n- Password must contain one number",
          "Password must contain at least 12 characters",
        );
        return true;
      }
      case "email": {
        assert(value, EmailValidation(), "Email must be a valid email");
        return true;
      }
      case "tel": {
        assert(value, PhoneValidation(), "Phone number must be a valid number");
        return true;
      }
      case "confirm_password": {
        const passwordInput = Array.from(inputs).find(
          (input) => input.id === "password",
        );
        const passwordValue = passwordInput?.value;
        if (input.value !== passwordValue) {
          addErrorMessage(input, "Password mismatch");
          return false;
        }

        return true;
      }
      default: {
        return true;
      }
    }
  } catch (e) {
    if (e instanceof StructError) {
      addErrorMessage(input, e.message);
    }
    return false;
  }
};
export const addErrorMessage = (input: HTMLInputElement, message: string) => {
  const inputContainer = input.closest(".input-container");
  const validationMessage = inputContainer?.querySelector(".error-message");
  if (validationMessage) {
    validationMessage.innerHTML = message;
    inputContainer?.classList.add("error");
  }
};
export const clearInputValidation = (input: HTMLInputElement) => {
  const inputContainer = input.closest(".input-container");
  const validationMessage = inputContainer?.querySelector(".error-message");
  if (validationMessage) {
    validationMessage.innerHTML = "";
    inputContainer?.classList.remove("error");
  }
};

export const addFormListeners = (inputs: NodeListOf<HTMLInputElement>) => {
  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      validateInput(input, inputs);
    });
    input.addEventListener("keypress", () => {
      clearInputValidation(input);
    });
  });
};

export const validateForm = (inputs: NodeListOf<HTMLInputElement>) => {
  let formValid = true;
  inputs.forEach((input) => {
    const result = validateInput(input, inputs);
    if (!result) {
      formValid = false;
    }
  });
  return formValid;
};
