import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { CatalogService } from '../../../core/services/domain-services';

@Component({ standalone: true, imports: [AsyncPipe, NgFor], template: `<h1 class='page-title'>Admin Categorias</h1><ul class='card'><li *ngFor='let c of categories$ | async'>{{c.name}}</li></ul>` })
export class AdminCategoriesPageComponent { private service = inject(CatalogService); categories$ = this.service.categories(); }
