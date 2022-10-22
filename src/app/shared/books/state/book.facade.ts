import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Book } from '../models/Book';
import { AddBook, Refresh } from './book.action';

@Injectable({
  providedIn: 'root'
})
export class BookFacadeService {

  constructor(private store: Store) {}

  refresh(){
    this.store.dispatch(new Refresh());
  }

  addBook(book: Book) {
    this.store.dispatch(new AddBook(book));
  }
}
