import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  child2(){
    this.router.navigate([`/child2`]);
  }

}
