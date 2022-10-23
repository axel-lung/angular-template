import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs';
import { Book } from '../models/Book';
import { BookService } from '../services/book.service';
import { AddBook, Refresh } from './book.action';

export class BookStateModel {
  books!: Book[];
}

@Injectable()
@State<BookStateModel>({
  name: 'books',
  defaults: {
    books: [],
  },
})
export class BookState {

  constructor(private bookService: BookService) {}

  @Action(AddBook)
  add(
    { getState, patchState }: StateContext<BookStateModel>,
    { payload }: AddBook
  ) {
    const state = getState();
    patchState({
      books: [...state.books, payload],
    });
  }

  @Action(Refresh)
  refresh({getState, setState}: StateContext<BookStateModel>) {
    const state = getState();
    return this.bookService.getAll().pipe(
      tap(value => {
        setState({
          ...state,
          books: value
        });
      })
    );
  }
}
