import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  public handle(token) {
    console.log('token is going to be set');
    this.set(token);
  }
  set(token) {
    console.log('token is going to be set');
    localStorage.setItem('token', token);
  }
}
