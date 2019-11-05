import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BOOKS } from './mock-books';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  apiURL = 'http://api.url';
  books: Book[];

  constructor() { }

  getBooks(): Observable<Book[]> {
    return of(BOOKS);
  }

  // getBooks(): Observable<any> {
  //   return this.http.get(`${this.apiURL}/books`);
  // }

  getBook(bookId: string) {
    const keyId = 'id';
    return BOOKS.find(res => res[keyId] === bookId);
  }

  editBookQuantity(bookId: string, newQuantity: number) {
    const keyId = 'id';
    const quantityId = 'quantity';
    return BOOKS[BOOKS.findIndex(elem => elem[keyId] === bookId)][quantityId] = newQuantity;
  }

  // editBookQuantity(bookId: string, newQuantity: number): Observable<any> {
  //   return this.http.put(`${this.apiURL}/books/${bookId}`, newQuantity);
  // }
}
