export interface User {
  username: string;
  displayName: string;
  token: string;
  imageUri?: string;
  isAdmin: boolean;
}

export interface UserFormValues {
  email: string;
  password: string;
  displayName?: string;
  username?: string;
}
