import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {TodoService} from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  oldText;
  appState = 'default';
  private path;
  
  constructor(private _todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
      this.path = params['status'];
      this.getTodos(this.path);
    });
  }

  getTodos(query){
     return this.todos = this._todoService.get(query);
  }


  addTodo(){
    var newTodo={
      text: this.text,
      complete: false
    }
    this.todos.unshift(newTodo);
    this._todoService.addTodo(newTodo);
    this.text = '';
  }
  
  deleteTodo(todoText){
    for(var i=0;i<this.todos.length;i++){
      if(this.todos[i].text == todoText){
        this.todos.splice(i,1);
      }
    }

    this._todoService.deleteTodo(todoText);
  }
  editTodo(todo){
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;
    
  }

  updateTodo(){
    for(var i=0;i<this.todos.length;i++){
      if(this.todos[i].text == this.oldText){
        this.todos[i].text = this.text;
      }
    }

    this._todoService.updateTodo(this.oldText, this.text);
    location.reload();
  }
  toggleTodoComplete(todo) {
    this.text = todo.text;
    for(var i=0;i<this.todos.length;i++){
      if(this.todos[i].text == this.text){
        this.todos[i].complete = true;
      }
    }
    this._todoService.toggleTodoComplete(this.text);
    location.reload();
  }
}
