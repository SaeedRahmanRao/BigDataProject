// formValues.ts

export type FormValues = {
  name: string;
  mobile: string;
  email: string;
  password: string;
  reEnterPassword: string;
  selectField: string;
  checkboxField: boolean;
  radioButtonField: string;
  age: number; // New field
  profilePicture: FileList; // New field - adjust the type as per your needs
  registrationNumber: string; // New field
  termsAndConditions: boolean; // New field for terms acceptance
};

// Add an empty export statement to turn it into a module
export {};
