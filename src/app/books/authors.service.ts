import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { AUTHORS } from './mock-authors';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors(): Observable<Author[]> {
    return of(AUTHORS);
  }
}
