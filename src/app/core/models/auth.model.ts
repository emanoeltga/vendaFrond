export interface LoginRequest { email: string; password: string; }

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  roles: string[];
}
