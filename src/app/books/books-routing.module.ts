import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books.component';

const booksRoutes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: ':id',
        component: BookDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(booksRoutes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
