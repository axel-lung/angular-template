import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/books/models/Book';
import { BookFacade } from 'src/app/shared/books/state/book.facade';
import { BookSelect } from 'src/app/shared/books/state/book.select';
import { BookState } from 'src/app/shared/books/state/book.state';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent implements OnInit {
  public books$!: Observable<Book[]>;
  angForm!: FormGroup;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private facade: BookFacade
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.books$ = this.store.select<Book[]>(BookSelect.getBooks);
    this.facade.refresh();
  }

  createForm() {
    this.angForm = this.fb.group({
      userId: [0, Validators.required],
      id: [0, Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  addBook() {
    const userId: number = this.angForm.get('userId')!.value;
    const id: number = this.angForm.get('id')!.value;
    const title: string = this.angForm.get('title')!.value;
    const body: string = this.angForm.get('body')!.value;

    this.facade.addBook({ userId, id, title, body });
  }
}
