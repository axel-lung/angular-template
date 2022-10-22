import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/shared/users/models/User';
import { UserService } from 'src/app/shared/users/services/user.service';
import { UserFacadeService } from 'src/app/shared/users/state/user-facade.service';
import { Refresh } from 'src/app/shared/users/state/user.action';
import { UserState, UserStateModel } from 'src/app/shared/users/state/user.state';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {

  users$: Observable<User[]>;
  angForm!: FormGroup;


  constructor(private store: Store, private fb: FormBuilder, private facade: UserFacadeService, private userService: UserService) {
    this.createForm();
    this.users$ = this.store.select<User[]>(state => state.users.users);
    this.facade.refresh();

    //this.users$ = this.store.select<UserStateModel>(UserState);
  }
  createForm() {
    this.angForm = this.fb.group({
      userid: [0, Validators.required ],
      id: [0, Validators.required ],
      title: ['', Validators.required ],
      body: ['', Validators.required ]
   });
  }

  get(){

  }


  addUser(){
    const userid: number = this.angForm.get('userid')!.value;
    const id: number = this.angForm.get('id')!.value;
    const title: string = this.angForm.get('title')!.value;
    const body: string = this.angForm.get('body')!.value;

    this.facade.addUser({ userid, id, title, body });
  }

}
