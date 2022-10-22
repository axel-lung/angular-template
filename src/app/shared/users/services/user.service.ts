import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': ''
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/posts', httpOptions);
  }
}
