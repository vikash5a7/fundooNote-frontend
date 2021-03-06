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

    pinnedNotes(id){
      return this.http.post(`${this.baseUrl}/note/pin/${id}`,{},
       { headers: new HttpHeaders().set('token', localStorage.getItem('token')) }).pipe(tap(() => {
        this._autoRefresh$.next();
      }));
    }

    public getTrashedNotes(): Observable<any> {
      console.log('get trashed');
      return this.http.get(`${this.baseUrl}/note/fetchTrashedNote`,
      {
        headers : new HttpHeaders().set('token', localStorage.getItem('token'))
      });
    }

     public deleteNotePermanetly(id){
      return this.http.delete(`${this.baseUrl}/note/deletePermanently/${id}`,
      { headers: new HttpHeaders().set('token', localStorage.getItem('token')) }).pipe(tap(() => {
       this._autoRefresh$.next();
     }));
     }

     public archiveNote(id){
      return this.http.post(`${this.baseUrl}/note/archive/${id}`,{},
       { headers: new HttpHeaders().set('token', localStorage.getItem('token')) }).pipe(tap(() => {
        this._autoRefresh$.next();
      }));
     }


     public getArchiveNotes(): Observable<any> {
      console.log('get trashed');
      return this.http.get(`${this.baseUrl}/note/fetcharchivenote`,
      {
        headers : new HttpHeaders().set('token', localStorage.getItem('token'))
      });
    }
    public getReminderNotes(): Observable<any> {
      console.log('get trashed');
      return this.http.get(`${this.baseUrl}/note/getreminderNote`,
      {
        headers : new HttpHeaders().set('token', localStorage.getItem('token'))
      });
    }
    public removeReminder(id){
      return this.http.post(`${this.baseUrl}/note/remove-reminder/${id}`,{},
       { headers: new HttpHeaders().set('token', localStorage.getItem('token')) }).pipe(tap(() => {
        this._autoRefresh$.next();
      }));
     }

  addreminder(noteId,reminder){
    return this.http.post(`${this.baseUrl}/note/addreminder?noteId=${noteId}`,{reminder},
     { headers: new HttpHeaders().set('token', localStorage.getItem('token')) }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }
  public updateNote(note: Note) {
    console.log('create note is ' + this.note);
    return this.http.put(`${this.baseUrl}/note/update`,
      note, {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }
  }
