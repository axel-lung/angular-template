import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { tap } from 'rxjs';
import { Book } from '../models/Book';
import { BookService } from '../services/book.service';
import { AddBook, Refresh } from './book.action';

@Injectable({
  providedIn: 'root'
})
export class BookFacade {

  constructor(private store: Store, private bookService: BookService) {}

  refresh(){
    this.store.dispatch(new Refresh());
  }

  addBook(book: Book) {
    // how to add book and add to store in facade
    // this.bookService.save(book).subscribe(() => {
    //   this.store.dispatch(new AddBook(book));
    // });
    this.store.dispatch(new AddBook(book));
  }
}
