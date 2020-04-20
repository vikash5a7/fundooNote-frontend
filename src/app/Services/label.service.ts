import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NoteService } from './note.service';
import { Observable, Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Label } from '../model/label';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  private baseUrl = environment.USER_API_URL;
 label: Label = new Label()
  private Label = new Subject<any>();
  private _autoRefresh$ = new Subject();
  get autoRefresh$() {
    return this._autoRefresh$;
  }
  constructor(private http: HttpClient, ) { }
  private httpOtions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };
  public createLabel(label: any): Observable<any> {
    console.log('create note is ' + label.name);
    return this.http.post(`${this.baseUrl}/label/create`,
      label, {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }

  public getAllLabel(): Observable<any> {
    console.log('inside the label service')
    return this.http.get(`${this.baseUrl}/labels/getAllLabel`,{
      headers : new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }

  deleteLabel(label){
    return this.http.post(`${this.baseUrl}/label/delete/`,  label , {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
    }

    renanmeLabel(label){
      console.log('renaming lablel')
      return this.http.put(`${this.baseUrl}/label/update`,  label , {
        headers: new HttpHeaders().set('token', localStorage.getItem('token'))
      }).pipe(tap(() => {
        this._autoRefresh$.next();
      }));
    }

    addLabel(label){
      return this.http.post(`${this.baseUrl}/label/delete/`,  label , {
        headers: new HttpHeaders().set('token', localStorage.getItem('token'))
      }).pipe(tap(() => {
        this._autoRefresh$.next();
      }));
      }

}
