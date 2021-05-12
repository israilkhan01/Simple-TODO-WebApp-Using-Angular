import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  // localItem: string;
  todos: Todo[];
  constructor() {
    // const userJson = localStorage.getItem('currentUser');
    // this.currentUser = userJson !== null ? JSON.parse(userJson) : new User();
    const localItem = localStorage.getItem('todos');

    if(localItem == null){
      this.todos = [];
    }else{
      this.todos = JSON.parse(localItem);
    }
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
