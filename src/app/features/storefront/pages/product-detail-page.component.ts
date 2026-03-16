import { Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { CatalogService, CartService } from '../../../core/services/domain-services';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgFor, CurrencyPipe],
  template: `<article class='card' *ngIf='product$ | async as product'><h1>{{product.name}}</h1><p>{{product.description}}</p><div *ngFor='let img of product.images'><img [src]='img.url' [alt]='img.alt' style='max-width:200px;border-radius:8px'/></div><button (click)='add(product.id)'>Adicionar ao carrinho</button></article>`
})
export class ProductDetailPageComponent {
  private route = inject(ActivatedRoute);
  private catalog = inject(CatalogService);
  private cart = inject(CartService);
  product$ = this.route.paramMap.pipe(map((m) => m.get('id') ?? ''), switchMap((id) => this.catalog.detail(id)));
  add(productId: string) { this.cart.addItem({ productId, quantity: 1 }).subscribe(); }
}
