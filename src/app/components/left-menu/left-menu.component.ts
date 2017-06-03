import { Component, OnInit } from '@angular/core';
import {User} from '../../registration/_models/index';
import {Router} from "@angular/router";

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

    currentUser: User;

    constructor(private router: Router) {
      router.events.subscribe(() => {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      });
    }

  ngOnInit() {
  }

}
