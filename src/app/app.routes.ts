import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/storefront-layout.component').then((m) => m.StorefrontLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./features/storefront/pages/catalog-page.component').then((m) => m.CatalogPageComponent) },
      { path: 'produto/:id', loadComponent: () => import('./features/storefront/pages/product-detail-page.component').then((m) => m.ProductDetailPageComponent) },
      { path: 'carrinho', loadComponent: () => import('./features/storefront/pages/cart-page.component').then((m) => m.CartPageComponent) },
      { path: 'login', loadComponent: () => import('./features/auth/pages/login-page.component').then((m) => m.LoginPageComponent) }
    ]
  },
  {
    path: 'cliente',
    loadComponent: () => import('./layouts/account-layout.component').then((m) => m.AccountLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: 'perfil', loadComponent: () => import('./features/account/pages/profile-page.component').then((m) => m.ProfilePageComponent) },
      { path: 'enderecos', loadComponent: () => import('./features/account/pages/addresses-page.component').then((m) => m.AddressesPageComponent) },
      { path: 'pedidos', loadComponent: () => import('./features/account/pages/orders-page.component').then((m) => m.OrdersPageComponent) },
      { path: 'checkout', loadComponent: () => import('./features/account/pages/checkout-page.component').then((m) => m.CheckoutPageComponent) }
    ]
  },
  {
    path: 'admin',
    loadComponent: () => import('./layouts/admin-layout.component').then((m) => m.AdminLayoutComponent),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['ADMIN'] },
    children: [
      { path: 'produtos', loadComponent: () => import('./features/admin/pages/admin-products-page.component').then((m) => m.AdminProductsPageComponent) },
      { path: 'categorias', loadComponent: () => import('./features/admin/pages/admin-categories-page.component').then((m) => m.AdminCategoriesPageComponent) },
      { path: 'marcas', loadComponent: () => import('./features/admin/pages/admin-brands-page.component').then((m) => m.AdminBrandsPageComponent) },
      { path: 'pedidos', loadComponent: () => import('./features/admin/pages/admin-orders-page.component').then((m) => m.AdminOrdersPageComponent) },
      { path: 'pagamentos', loadComponent: () => import('./features/admin/pages/admin-payments-page.component').then((m) => m.AdminPaymentsPageComponent) },
      { path: 'usuarios', loadComponent: () => import('./features/admin/pages/admin-users-page.component').then((m) => m.AdminUsersPageComponent) }
    ]
  },
  { path: '**', redirectTo: '' }
];
