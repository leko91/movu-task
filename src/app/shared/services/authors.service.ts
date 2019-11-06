import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { AUTHORS } from '../mocks/authors';
import { Author } from '../models/author';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors(): Observable<Author[]> {
    return of(AUTHORS);
  }

  getAuthor(book: Book) {
    const keyName = 'name';

    return AUTHORS.find(res => res[keyName] === book.author);
  }
}
