import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  styleUrl: './layouts.scss',
  template: `<section class='layout-shell'><header><div class='container'><strong>Minha conta</strong><nav><a routerLink='/cliente/perfil'>Perfil</a><a routerLink='/cliente/enderecos'>Endereços</a><a routerLink='/cliente/pedidos'>Pedidos</a><a routerLink='/cliente/checkout'>Checkout</a></nav></div></header><main class='container'><router-outlet/></main></section>`
})
export class AccountLayoutComponent {}
