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
public createNote(note: any): Observable<any> {
      return this.http.post(`${this.baseUrl}/note/create`,
      note, {
        headers: new HttpHeaders().set('token', localStorage.getItem('token'))
      });
    }
}
