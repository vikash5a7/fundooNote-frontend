import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public valideUser = false;
  public loggedIn = false;
  constructor() { }
  public handle(token) {
    console.log('token is going to be set');
    this.set(token);
  }
  // setting token in local
  set(token) {
    sessionStorage.setItem('token', token);
  }
  // getting token from the local storage
  get() {
   return sessionStorage.getItem('token');
  }
  // Removing item from the local storage
  remove() {
    sessionStorage.removeItem('token');
  }
  logedIn(value: boolean) {
   return this.loggedIn = value;

  }
  loggedStatus() {
  return this.logedIn(this.loggedIn);
  }
}
