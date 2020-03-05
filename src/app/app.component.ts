import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'vikash';
  salary = 5000;
  show(): string {
    return this.name + '_' + this.salary;
  }
}
