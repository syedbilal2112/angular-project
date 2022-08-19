import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserProfileService } from "../user.service";

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserProfileService) { }
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ["",Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mobileNumber: ["", Validators.pattern("[6-9]\\d{9}")],
      password: ["", Validators.required],
      dob: ["", Validators.required],
      role: ["STUDENT", Validators.required],
      gender: [""]
    });
  }
  onSubmit(){
    this.userService
    .post('api/user', this.userForm.value)
    .subscribe(
      (data: any) => {
        alert("Successfully added user data")
      }
    );
  }
}
