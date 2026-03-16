import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  styleUrl: './layouts.scss',
  template: `<section class='layout-shell'><header><div class='container'><strong>VendaFrond</strong><nav><a routerLink='/'>Catálogo</a><a routerLink='/carrinho'>Carrinho</a><a routerLink='/login'>Login</a></nav></div></header><main class='container'><router-outlet/></main></section>`
})
export class StorefrontLayoutComponent {}
