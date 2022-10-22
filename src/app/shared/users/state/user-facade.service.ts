import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { AddUser, Refresh } from 'src/app/shared/users/state/user.action';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {
  //public users$ = this.store.select(state => state.users.users);

  constructor(private store: Store) {


  }

  refresh(){
    this.store.dispatch(new Refresh());
  }

  addUser(user: User) {
    this.store.dispatch(new AddUser(user));
  }
}
