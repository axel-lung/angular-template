import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { BookState } from 'src/app/shared/books/state/book.state';
import { BooklistComponent } from './booklist/booklist.component';



@NgModule({
  declarations: [
    HomeComponent, BooklistComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forRoot([
      BookState
    ]),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
