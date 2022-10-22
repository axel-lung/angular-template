import { Selector } from "@ngxs/store";
import { BookStateModel } from "./book.state";

export class BookSelect{
  @Selector()
  static getBooks(state: BookStateModel) {
    return state.books;
  }
}
