import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { UserProfileService } from "../user.service";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  
  constructor(
    private router: Router,
    private userService: UserProfileService
  ) { }

  users : any;
  ngOnInit(): void {
    this.userService
    .get('api/user')
    .subscribe(
      (data: any) => {
        this.users = data;
      }
    );
  }

  child2() {
    this.router.navigate([`/child2`]);
  }

}
