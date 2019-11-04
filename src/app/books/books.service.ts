import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BOOKS } from './mock-books';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  apiURL = 'http://api.url';

  constructor() { }

  getBooks(): Observable<Book[]> {
    return of(BOOKS);
  }

  // getBooks(): Observable<any> {
  //   return this.http.get(`${this.apiURL}/books`);
  // }

  getBookById(inputArray: Book[], id: string) {
    const keyId = 'id';
    return inputArray.find(res => res[keyId] === id);
  }

  editBookQuantity(inputArray: Book[], id: string, newQuantity: number) {
    const keyId = 'id';
    const quantityId = 'quantity';
    return inputArray[inputArray.findIndex(elem => elem[keyId] === id)][quantityId] = newQuantity;
  }

  // editBookQuantity(bookId: string, newQuantity: number): Observable<any> {
  //   return this.http.put(`${this.apiURL}/books/${bookId}`, newQuantity);
  // }
}
