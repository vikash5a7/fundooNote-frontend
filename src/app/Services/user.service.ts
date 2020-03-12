import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient ) { }

 public signUp(data: any) {
    return this.http.post(`${this.baseUrl}/user/registration`, data);
  }
  public signIn(data: any) {
    return this.http.post(`${this.baseUrl}/user/login`, data);
  }
  verifyUserByToken(token) {
    return this.http.post(`${this.baseUrl}/user/verify/`, token);
  }
  forgetPassword(data) {
    return this.http.post(`${this.baseUrl}/user/forgotpassword`, data);
  }
  public updatePassword(updatePassword: any, token: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/user/update/${token}`,
      updatePassword,
    );
  }
}
