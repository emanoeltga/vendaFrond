import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `<h1 class='page-title'>Entrar</h1><form class='card' [formGroup]='form' (ngSubmit)='submit()'><input placeholder='E-mail' formControlName='email'/><input placeholder='Senha' type='password' formControlName='password'/><button [disabled]='form.invalid'>Entrar</button></form>`
})
export class LoginPageComponent {
  private auth = inject(AuthService); private router = inject(Router);
  form = new FormGroup({ email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }), password: new FormControl('', { nonNullable: true, validators: [Validators.required] }) });
  submit() { if (this.form.invalid) return; this.auth.login(this.form.getRawValue()).subscribe(() => this.router.navigateByUrl('/cliente/perfil')); }
}
