export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  roles: string[];
  active: boolean;
}
