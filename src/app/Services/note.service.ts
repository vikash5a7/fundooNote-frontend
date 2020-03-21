import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Note } from '../model/note';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private baseUrl = environment.USER_API_URL;
  note: Note = new Note();
  private notesList = new Subject<any>();
  // tslint:disable-next-line: variable-name
  private _autoRefresh$ = new Subject();
  get autoRefresh$() {
    return this._autoRefresh$;
  }
  constructor(private http: HttpClient, ) { }
  private httpOtions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };
  public createNote(note: any): Observable<any> {
    console.log('create note is ' + this.note);
    return this.http.post(`${this.baseUrl}/note/create`,
      note, {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }
  public getAllNotes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/note/fetchNote`,
    {
      headers : new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }

  public getAllPinnedNotes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/note/fetchpinnednote`,
    {
      headers : new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }

  addColor(noteId,color){
    return this.http.post(`${this.baseUrl}/note/addColour?noteId=${noteId}&colour=${color}`,{},
     { headers: new HttpHeaders().set('token', localStorage.getItem('token')) }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }
  deleteNote(id){
    return this.http.delete(`${this.baseUrl}/note/delete/${id}`, {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
    }
}
