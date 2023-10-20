import { getFormattedValue } from "./getFormattedValue";
import { getValidation } from "./getValidation";

const getFormattedData = (data: User[]) => {
  return data.map((user: User) => {
    return Object.entries(user).map(([key, value]) => ({
      key,
      value: getFormattedValue({ key, value }),
      error: !getValidation({ key, value, age: user["Age"] }),
    }));
  });
};

export { getFormattedData };
