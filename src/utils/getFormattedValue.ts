const getFormattedYearlyIncome = (income: number) => {
  return income.toFixed(2);
};

export const getFormattedPhoneNumber = (phoneNumber: any) => {
  const phoneNumberString = phoneNumber?.toString();
  const formattedPhoneNumber = phoneNumberString?.replace(/\D/g, ""); // Видаляємо всі нецифрові символи

  if (formattedPhoneNumber?.length === 10) {
    return `+1${formattedPhoneNumber}`;
  } else if (
    formattedPhoneNumber?.length === 11 &&
    formattedPhoneNumber[0] === "1"
  ) {
    return `+${formattedPhoneNumber}`;
  } else if (formattedPhoneNumber?.length === 10) {
    return `+1${formattedPhoneNumber}`;
  } else {
    return;
  }
};

const getFormattedLicenseStates = (inputString: string) => {
  const parts = inputString.split("|");

  const transformedArray = parts.map((part: string) => {
    const words = part.split(" ");
    const capitalizedWords = words.map((word: string) => {
      return word.charAt(0).toUpperCase() + word.charAt(1).toUpperCase();
    });
    return capitalizedWords.join("");
  });
  return transformedArray.join(" | ");
};

export const getFormattedValue = ({
  key,
  value,
}: {
  key: string;
  value: any;
}) => {
  switch (key) {
    case "Yearly income":
      return getFormattedYearlyIncome(value);
    case "Phone":
      return getFormattedPhoneNumber(value);
    case "License states":
      return getFormattedLicenseStates(value);
    default:
      return value;
  }
};
