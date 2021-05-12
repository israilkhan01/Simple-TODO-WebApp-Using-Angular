import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Todo} from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  
  "title":String;
  "desc":String;
  @Output() "addTodo" : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    const todo={
      sno:1,
      title:this.title,
      desc:this.desc,
      active:true,
    }

    this.addTodo.emit(todo);
  }
}
