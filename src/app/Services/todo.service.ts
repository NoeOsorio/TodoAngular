import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Todo } from '../Interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'https://demo6193376.mockable.io/todos';
  todos: Subject<Todo[]>;
  todosArray: Todo[] = [];

  constructor(private http: HttpClient) {
    this.todos = new Subject();
    this.todos.next(this.todosArray);
    this.initTodos();
  }

  getTodos(): Observable<Todo[]> {
    return this.todos;
  }

  initTodos() {
    (this.http.get(this.url) as Observable<Todo[]>)
      .toPromise()
      .then((value) => {
        console.log({ value });
        this.todosArray = value;
        this.todos.next(value);
      });
  }

  createTodo(todo: Todo) {
    this.todosArray.push(todo);
    console.log(this.todosArray);
    this.todos.next(this.todosArray);
  }
}
