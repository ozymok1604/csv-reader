import { getFormattedPhoneNumber } from "./getFormattedValue";

export const getDuplicateId = (usersArray: User[], user: User) => {
  const duplicate = usersArray.find((existingUser: User) => {
    if (user === existingUser) {
      return false;
    }
    return (
      existingUser["Email"]?.toLowerCase() === user["Email"]?.toLowerCase() ||
      getFormattedPhoneNumber(existingUser["Phone"]) ===
        getFormattedPhoneNumber(user["Phone"])
    );
  });

  return duplicate ? duplicate["ID"] : null;
};
