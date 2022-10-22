import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': ''
  }),
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this._http.get<Book[]>('https://jsonplaceholder.typicode.com/posts', httpOptions);
  }
}
