import { Component, OnInit } from '@angular/core';
import { Todo } from '../Interfaces/todo';
import { TodoPipe } from '../Pipes/todo.pipe';
import { TodoService } from '../Services/todo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  name: string;
  todos: Todo[];
  todo: Todo;

  constructor(private todoService: TodoService) {
    this.name = 'Noe';
    this.todo = {
      id: 1,
      title: 'Comprar manzanas',
      active: true,
      prioridad: 'baja',
    };
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      console.log(todos);
      this.todos = todos;
    });
  }

  addTodo() {
    console.log('Add TOdo');
    this.todoService.createTodo({
      id: 8,
      title: 'Comprar sodas',
      active: true,
      prioridad: 'baja',
    });
  }
}
