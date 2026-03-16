import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CartService } from '../../../core/services/domain-services';

@Component({
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `<h1 class='page-title'>Carrinho</h1><pre class='card'>{{ cart$ | async | json }}</pre>`
})
export class CartPageComponent { private service = inject(CartService); cart$ = this.service.getCart(); }
