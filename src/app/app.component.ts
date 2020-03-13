import { TokenService } from './Services/token.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private tokenService: TokenService) { }
  public signedStatus = this.tokenService.loggedIn;
}
