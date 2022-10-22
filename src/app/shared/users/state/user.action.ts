import { User } from '../models/User';

export class AddUser {
    static readonly type = '[User] Add';
    constructor(public payload: User) {}
}

export class Refresh {
  static readonly type = '[User] Refresh';
  constructor() {}
}
