export type InputBox = {
  label: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

export type ButtonAtt = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name?: string;
};

export type LoginData = {
  emailId: string;
  password: string;
};

export type InputBoxSignUp = {
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
};

export interface User {
  firstName: string;
  lastName: string;
  emailId: string;
  photoUrl: string;
  about: string;
  age?: string;
  gender?: string;
  skills: string[];
}

export interface Feed {
  _id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  age?: string;
  gender?: string;
  about: string;
  skills: string[];
}

export interface Feeds {
  feeds: Feed[];
}
