import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
    private  baseUrl = environment.USER_API_URL;
    constructor(private http: HttpClient, ) { }
  private httpOtions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };
  // createNote(note: any, token: any): Observable<any> {
  //   console.log(`${environment.notesApiURL}/${environment.createNote}`);
  // tslint:disable-next-line: max-line-length
  //   return this.httpservice.post(`${environment.notesApiURL}/${environment.createNote}`, note, { headers: new HttpHeaders().set('token', sessionStorage.token) }).pipe(tap(() => {
  //     this._autoRefresh$.next();
  //   }));
  // }

public createNote(note: any): Observable<any> {
      return this.http.post(`${this.baseUrl}/note/create`,
      note, {
        headers: new HttpHeaders().set('token', localStorage.getItem('token'))
      });
    }
}
