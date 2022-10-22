import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { profile } from 'console';
import { catchError, tap } from 'rxjs';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { AddUser, Refresh } from './user.action';

export class UserStateModel {
  users!: User[];
}

@Injectable()
@State<UserStateModel>({
  name: 'users',
  defaults: {
    users: [],
  },
})
export class UserState {

  constructor(private userService: UserService, private store: Store) {}

  @Action(AddUser)
  add(
    { getState, patchState }: StateContext<UserStateModel>,
    { payload }: AddUser
  ) {
    const state = getState();
    patchState({
      users: [...state.users, payload],
    });
  }

  @Action(Refresh)
  refresh({getState, setState}: StateContext<UserStateModel>) {
    const state = getState();
    console.log("test");

    // setState({
    //   ...state,
    //   users: payload
    // });

    return this.userService.getAll().pipe(
      tap(value => {
        console.log('updating the state...');
        setState({
          ...state,
          users: value
        });
        console.log('status updated.');
      })
    ).subscribe(
      (success) => {
        console.log(success);
      }
      // { next: console.log, error: err => console.log(err.message) }
    );
  }
}
