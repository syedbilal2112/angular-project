import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { AccountRoutingModule } from './account-routing.module';
import { Child1Component } from './child1/child1.component';
import { UserComponent } from './user/user.component';
import { Child2Component } from './child2/child2.component';
import { UserProfileService } from './user.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    Child1Component,
    UserComponent,
    Child2Component
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    UserProfileService
  ]
})
export class AccountModule { }
