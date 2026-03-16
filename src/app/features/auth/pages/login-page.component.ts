import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `<h1 class='page-title'>Entrar</h1><form class='card' [formGroup]='form' (ngSubmit)='submit()'><input placeholder='E-mail' formControlName='email'/><input placeholder='Senha' type='password' formControlName='password'/><button [disabled]='form.invalid'>Entrar</button><p *ngIf='loginError()'>{{ loginError() }}</p></form>`
})
export class LoginPageComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  readonly loginError = signal('');
  form = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.loginError.set('');
    this.auth.login(this.form.getRawValue()).subscribe({
      next: () => this.router.navigateByUrl('/cliente/perfil'),
      error: () => this.loginError.set('Não foi possível autenticar. Verifique e-mail e senha.')
    });
  }
}
