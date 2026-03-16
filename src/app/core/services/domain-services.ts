import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiBaseService } from './api-base.service';
import { ApiFilter, PaginatedResponse } from '../models/common.model';
import { Address } from '../models/address.model';
import { Order } from '../models/order.model';
import { Product, Brand, Category } from '../models/catalog.model';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersService extends ApiBaseService {
  private http = inject(HttpClient);
  profile() { return this.http.get<User>('${apiBaseUrl}/api/users/me'); }
  updateProfile(payload: Partial<User>) { return this.http.put<User>('${apiBaseUrl}/api/users/me', payload); }
  list(filter: ApiFilter) { return this.http.get<PaginatedResponse<User>>('${apiBaseUrl}/api/users', { params: this.toParams(filter) }); }
}

@Injectable({ providedIn: 'root' })
export class CatalogService extends ApiBaseService {
  private http = inject(HttpClient);
  listProducts(filter: ApiFilter) { return this.http.get<PaginatedResponse<Product>>('${apiBaseUrl}/api/catalog/products', { params: this.toParams(filter) }); }
  detail(id: string) { return this.http.get<Product>('${apiBaseUrl}/api/catalog/products/${id}'); }
  categories() { return this.http.get<Category[]>('${apiBaseUrl}/api/categories'); }
  brands() { return this.http.get<Brand[]>('${apiBaseUrl}/api/brands'); }
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private http = inject(HttpClient);
  getCart() { return this.http.get('${apiBaseUrl}/api/cart'); }
  addItem(payload: unknown) { return this.http.post('${apiBaseUrl}/api/cart/items', payload); }
  updateItem(id: string, payload: unknown) { return this.http.put('${apiBaseUrl}/api/cart/items/${id}', payload); }
  removeItem(id: string) { return this.http.delete('${apiBaseUrl}/api/cart/items/${id}'); }
}

@Injectable({ providedIn: 'root' })
export class CheckoutService {
  private http = inject(HttpClient);
  summary() { return this.http.get('${apiBaseUrl}/api/checkout/summary'); }
  placeOrder(payload: unknown) { return this.http.post<Order>('${apiBaseUrl}/api/checkout/place-order', payload); }
}

@Injectable({ providedIn: 'root' })
export class OrdersService extends ApiBaseService {
  private http = inject(HttpClient);
  history(filter: ApiFilter) { return this.http.get<PaginatedResponse<Order>>('${apiBaseUrl}/api/orders', { params: this.toParams(filter) }); }
  detail(id: string) { return this.http.get<Order>('${apiBaseUrl}/api/orders/${id}'); }
}

@Injectable({ providedIn: 'root' })
export class AddressesService {
  private http = inject(HttpClient);
  list() { return this.http.get<Address[]>('${apiBaseUrl}/api/addresses'); }
  create(payload: Partial<Address>) { return this.http.post<Address>('${apiBaseUrl}/api/addresses', payload); }
  update(id: string, payload: Partial<Address>) { return this.http.put<Address>('${apiBaseUrl}/api/addresses/${id}', payload); }
  remove(id: string) { return this.http.delete('${apiBaseUrl}/api/addresses/${id}'); }
}

@Injectable({ providedIn: 'root' })
export class AdminProductsService extends ApiBaseService {
  private http = inject(HttpClient);
  list(filter: ApiFilter) { return this.http.get<PaginatedResponse<Product>>('${apiBaseUrl}/api/admin/products', { params: this.toParams(filter) }); }
  create(payload: Partial<Product>) { return this.http.post<Product>('${apiBaseUrl}/api/admin/products', payload); }
  update(id: string, payload: Partial<Product>) { return this.http.put<Product>('${apiBaseUrl}/api/admin/products/${id}', payload); }
  remove(id: string) { return this.http.delete('${apiBaseUrl}/api/admin/products/${id}'); }
}

@Injectable({ providedIn: 'root' })
export class AdminOrdersService extends ApiBaseService {
  private http = inject(HttpClient);
  list(filter: ApiFilter) { return this.http.get<PaginatedResponse<Order>>('${apiBaseUrl}/api/admin/orders', { params: this.toParams(filter) }); }
  history(id: string) { return this.http.get('${apiBaseUrl}/api/admin/order-history/${id}'); }
}

@Injectable({ providedIn: 'root' })
export class AdminPaymentsService extends ApiBaseService {
  private http = inject(HttpClient);
  list(filter: ApiFilter) { return this.http.get('${apiBaseUrl}/api/admin/payments', { params: this.toParams(filter) }); }
}
