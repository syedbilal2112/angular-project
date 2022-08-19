import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { Child1Component } from './child1/child1.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    Child1Component,
    UserComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
