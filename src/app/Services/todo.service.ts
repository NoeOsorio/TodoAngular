import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Todo } from '../Interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'https://demo6193376.mockable.io/todos';
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get(this.url) as Observable<Todo[]>;
  }
}
