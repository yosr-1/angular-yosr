export interface User {
  id?: number;
  name: string;
  email: string;
  gender?: string;
  [key: string]: string | number | boolean | null | undefined;
}
