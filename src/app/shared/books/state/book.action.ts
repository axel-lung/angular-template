import { Book } from '../models/Book';

export class AddBook {
    static readonly type = '[Book] Add';
    constructor(public payload: Book) {}
}

export class Refresh {
  static readonly type = '[Book] Refresh';
  constructor() {}
}
