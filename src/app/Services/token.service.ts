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
  public set(token) {
    localStorage.setItem('token', token);
  }
  // getting token from the local storage
 public get() {
   return localStorage.getItem('token');
  }
  // Removing item from the local storage
  remove() {
    localStorage.removeItem('token');
  }
  logedIn(value: boolean) {
  if ( this.get() != null) {
    return this.loggedIn = true;
  }
  }
  loggedStatus() {
  return this.logedIn(this.loggedIn);
  }
}
