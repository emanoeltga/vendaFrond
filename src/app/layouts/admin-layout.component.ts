import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  styleUrl: './layouts.scss',
  template: `<section class='layout-shell'><header><div class='container'><strong>Painel Admin</strong><nav><a routerLink='/admin/produtos'>Produtos</a><a routerLink='/admin/categorias'>Categorias</a><a routerLink='/admin/marcas'>Marcas</a><a routerLink='/admin/pedidos'>Pedidos</a><a routerLink='/admin/pagamentos'>Pagamentos</a><a routerLink='/admin/usuarios'>Usuários</a></nav></div></header><main class='container'><router-outlet/></main></section>`
})
export class AdminLayoutComponent {}
