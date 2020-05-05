import { TokenService } from './Services/token.service';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private tokenService: TokenService,
              private titleService: Title ) { }
  public signedStatus = this.tokenService.loggedIn;

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
