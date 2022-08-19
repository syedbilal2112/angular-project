import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AuthRoutingModule } from "./user-routing";

// import { Child1Component } from "../child1/child1.component";
@NgModule({
  declarations: [
    // Child1Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule {}
