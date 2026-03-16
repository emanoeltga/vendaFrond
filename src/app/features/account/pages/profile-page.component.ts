import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { UsersService } from '../../../core/services/domain-services';

@Component({ standalone: true, imports: [AsyncPipe, JsonPipe], template: `<h1 class='page-title'>Perfil</h1><pre class='card'>{{ profile$ | async | json }}</pre>` })
export class ProfilePageComponent { private users = inject(UsersService); profile$ = this.users.profile(); }
