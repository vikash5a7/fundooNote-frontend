import { Component, OnInit } from '@angular/core';
import { TokenService } from '../Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fundoo-dashboard',
  templateUrl: './fundoo-dashboard.component.html',
  styleUrls: ['./fundoo-dashboard.component.scss']
})
export class FundooDashboardComponent implements OnInit {

  constructor(
     private token: TokenService,
     private route: Router,
  ) { }

  ngOnInit() {
  }
  logout(event: MouseEvent) {
    console.log('loggout function called');
    event.preventDefault();
    this.token.remove();
    this.token.logedIn(false);
    this.route.navigateByUrl('/login');
  }
}
