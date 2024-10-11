export interface FieldType {
  label: string;
  name: string;
  placeholder: string;
  validation: string;
}

export enum BackgroundPaths {
  Desktop = "images/backgrounds/desk.jpg",
  Mobile = "images/backgrounds/mob.jpg",
}

export interface Form {
  form: {
    title: string;
    field1: FieldType;
    field2: FieldType;
    field3: FieldType;
    field4: FieldType;
    button: string;
    message: string;
  };
}

export const form: Form = {
  form: {
    title: "PLEASE ENTER YOUR DETAILS BELOW",
    field1: {
      label: "Your Name",
      name: "name",
      placeholder: "Enter Your Name",
      validation: "Required",
    },
    field2: {
      label: "Your Surname",
      name: "surname",
      placeholder: "Enter Your Surname",
      validation: "Required",
    },
    field3: {
      label: "Email Address",
      name: "email",
      placeholder: "Enter Your Email",
      validation: "Required",
    },
    field4: {
      label: "Message",
      name: "message",
      placeholder: "Enter Your Message",
      validation: "Required",
    },
    button: "Submit",
    message: "Your answer was sent",
  },
};
