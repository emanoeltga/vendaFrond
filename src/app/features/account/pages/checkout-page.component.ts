import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CheckoutService } from '../../../core/services/domain-services';

@Component({ standalone: true, imports: [AsyncPipe, JsonPipe], template: `<h1 class='page-title'>Checkout</h1><pre class='card'>{{ summary$ | async | json }}</pre><button (click)='finish()'>Finalizar compra</button>` })
export class CheckoutPageComponent {
  private checkout = inject(CheckoutService);
  summary$ = this.checkout.summary();
  finish() { this.checkout.placeOrder({ paymentMethod: 'credit_card' }).subscribe(); }
}
