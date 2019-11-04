import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  declarations: [
    BooksComponent,
    BookDetailsComponent,
  ],
  imports: [
    BooksRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class BooksModule { }
