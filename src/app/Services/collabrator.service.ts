import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollabratorService {
  private baseUrl = environment.USER_API_URL;
  private _autoRefresh$ = new Subject();
  get autoRefresh$() {
    return this._autoRefresh$;
  }
  constructor(private http: HttpClient, ) { }
  private httpOtions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };

  addCollabrator(email,noteId){
    return this.http.post(`${this.baseUrl}/addCollab?email=${email}&noteId=${noteId}`,{},
     { headers: new HttpHeaders().set('token', localStorage.getItem('token')) }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }

  removeCollabrator(email,noteId){
    return this.http.delete(`${this.baseUrl}/addCollab?email=${email}&noteId=${noteId}`,
     { headers: new HttpHeaders().set('token', localStorage.getItem('token')) }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }

  public getAllCollabratorNotes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fetchColabNote`,
    {
      headers : new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }

}
