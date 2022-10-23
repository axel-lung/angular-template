import { Injectable } from "@angular/core";
import { Selector, State } from "@ngxs/store";
import { BookStateModel } from "./book.state";

@Injectable()
@State<BookStateModel>({
  name: 'books',
  defaults: {
    books: [],
  },
})
export class BookSelect{
  @Selector()
  static getBooks(state: BookStateModel) {
    return state.books.filter(book => book.userId == 1);
  }
}
