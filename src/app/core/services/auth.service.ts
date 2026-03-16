import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthToken, LoginRequest } from '../models/auth.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private readonly tokenKey = 'accessToken';
  readonly roles = signal<string[]>([]);

  login(payload: LoginRequest) {
    const url = `${environment.apiBaseUrl}${environment.apiPrefix}/auth/login`;

    return this.http.post<AuthToken>(url, payload).pipe(
      tap((res) => {
        localStorage.setItem(this.tokenKey, res.accessToken);
        this.roles.set(res.roles);
      })
    );
  }

  get token() {
    return localStorage.getItem(this.tokenKey);
  }
  isAuthenticated() {
    return !!this.token;
  }
  hasRole(role: string) {
    return this.roles().includes(role);
  }
  logout() {
    localStorage.removeItem(this.tokenKey);
    this.roles.set([]);
  }
}
