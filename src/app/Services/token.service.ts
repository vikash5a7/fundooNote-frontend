import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  public handle(token) {
    console.log('token is going to be set');
    this.set(token);
    console.log('decoded form is ' + JSON.stringify(this.payLoad(token)));
  }
  // setting token in local
  set(token) {
    localStorage.setItem('token', token);
  }
  // getting token from the local storage
  get() {
   return localStorage.getItem('token');
  }
  // Removing item from the local storage
  remove() {
    localStorage.removeItem('token');
  }
  isValid() {
    const token = this.get();
    if (this.get()) {
      const payload = this.payLoad(token);
    }
  }
  payLoad(token) {
    const payload = token.split('.')[1];
    console.log('payload is : ' + payload);
    return this.decode(payload);
  }
  decode(payload) {
    return JSON.parse(atob(payload));
  }
}
