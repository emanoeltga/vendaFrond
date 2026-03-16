import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { CatalogService } from '../../../core/services/domain-services';

@Component({ standalone: true, imports: [AsyncPipe, NgFor], template: `<h1 class='page-title'>Admin Marcas</h1><ul class='card'><li *ngFor='let b of brands$ | async'>{{b.name}}</li></ul>` })
export class AdminBrandsPageComponent { private service = inject(CatalogService); brands$ = this.service.brands(); }
