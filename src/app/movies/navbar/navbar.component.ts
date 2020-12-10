import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navShow: boolean = false
  constructor() { }

  ngOnInit(): void {
    window.onscroll = () => {
      if (window.scrollY > 100) {

        this.navShow = true;
      }
      else {
        this.navShow = false
      }
    }
  }

}
