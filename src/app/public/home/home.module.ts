import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { UserState } from 'src/app/shared/users/state/user.state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { UserlistComponent } from './userlist/userlist.component';



@NgModule({
  declarations: [
    HomeComponent, UserlistComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forRoot([
      UserState
    ]),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
