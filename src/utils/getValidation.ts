const getIsValidEmail = (email: string) => {
  return email.includes("@");
};

const getIsValidAge = (age: number) => {
  return age >= 21;
};

const getIsValidYearlyIncome = (income: number) => {
  return income >= 0 && income <= 1000000;
};

const getIsValidExperience = (experience: number, age: number) => {
  return experience >= 0 && experience <= age;
};

const getIsValidLicenseNumber = (licenseNumber: string) => {
  const regex = /^[0-9A-Za-z]{6}$/;
  return regex.test(licenseNumber);
};

const getIsValidHasChildren = (hasChildren: string) => {
  return hasChildren == "TRUE" || hasChildren == "FALSE" || hasChildren == "";
};

const getIsValidExpirationDate = (dateString: string) => {
  const currentDate = new Date();
  const inputDate = new Date(dateString);

  if (isNaN(inputDate.getTime())) {
    return false; // Недійсна дата
  }

  if (
    (/\d{4}-\d{2}-\d{2}/.test(dateString) ||
      /\d{2}\/\d{2}\/\d{4}/.test(dateString)) &&
    inputDate >= currentDate
  ) {
    return true;
  } else {
    return false;
  }
};

const getIsValidPhoneNumber = (phoneNumber: string) => {
  const phoneNumberRegex = /^(\+?1?\d{10})$/;

  return phoneNumberRegex.test(phoneNumber);
};

export const getValidation = ({
  key,
  value,
  age,
}: {
  key: string;
  value: any;
  age?: any;
}) => {
  switch (key) {
    case "Full name":
      return getIsValidAge(value);
    case "Age":
      return getIsValidAge(value);
    case "Email":
      return getIsValidEmail(value);
    case "Yearly Income":
      return getIsValidYearlyIncome(value);
    case "License number":
      return getIsValidLicenseNumber(value);
    case "Has children":
      return getIsValidHasChildren(value);
    case "Experience":
      return getIsValidExperience(value, age);
    case "Expiration date":
      return getIsValidExpirationDate(value);
    case "Phone":
      return getIsValidPhoneNumber(value);
    default:
      return true;
  }
};
