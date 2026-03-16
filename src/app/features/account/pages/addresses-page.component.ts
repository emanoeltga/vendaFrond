import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe, NgFor } from '@angular/common';
import { AddressesService } from '../../../core/services/domain-services';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, NgFor],
  template: `<h1 class='page-title'>Endereços</h1><form class='card' [formGroup]='form' (ngSubmit)='save()'><input placeholder='Destinatário' formControlName='recipient'><input placeholder='CEP' formControlName='zipCode'><button>Salvar</button></form><ul class='card'><li *ngFor='let a of addresses$ | async'>{{a.street}} - {{a.city}}</li></ul>`
})
export class AddressesPageComponent {
  private addresses = inject(AddressesService);
  addresses$ = this.addresses.list();
  form = new FormGroup({ recipient: new FormControl('', { nonNullable: true, validators: [Validators.required] }), zipCode: new FormControl('', { nonNullable: true, validators: [Validators.required] }) });
  save() { if (this.form.invalid) return; this.addresses.create(this.form.getRawValue()).subscribe(() => this.addresses$ = this.addresses.list()); }
}
