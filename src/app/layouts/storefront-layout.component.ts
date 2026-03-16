import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  styleUrl: './layouts.scss',
  template: `
    <section class='layout-shell ml-shell'>
      <header class='ml-header'>
        <div class='container ml-header-top'>
          <a class='ml-brand' routerLink='/'>
            <span class='ml-brand-badge'>VF</span>
            <strong>VendaFrond</strong>
          </a>

          <label class='ml-search'>
            <input placeholder='Buscar produtos, marcas e muito mais...' />
          </label>

          <nav class='ml-actions'>
            <a routerLink='/'>Catálogo</a>
            <a routerLink='/carrinho'>Carrinho</a>
            <a routerLink='/login'>Entrar</a>
          </nav>
        </div>

        <div class='container ml-subnav'>
          <a routerLink='/'>Ofertas do dia</a>
          <a routerLink='/'>Supermercado</a>
          <a routerLink='/'>Moda</a>
          <a routerLink='/'>Eletrônicos</a>
          <a routerLink='/'>Casa & Decoração</a>
        </div>
      </header>

      <main>
        <div class='container'>
          <section class='ml-hero card'>
            <div>
              <p class='ml-hero-tag'>Marketplace</p>
              <h1>Frete rápido, ofertas e tudo para sua casa em um só lugar</h1>
              <p>Um layout inspirado nos grandes marketplaces para deixar sua vitrine mais familiar aos clientes.</p>
            </div>
          </section>

          <router-outlet />
        </div>
      </main>
    </section>
  `
})
export class StorefrontLayoutComponent {}
