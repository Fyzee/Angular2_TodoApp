import { Injectable } from '@angular/core';
import {Init} from './init-todos';

@Injectable()
export class TodoService extends Init{

  constructor() {
    super();
    console.log('TodoService Initialized...');
    this.load();
   }

   get(query){
     let todos = JSON.parse(localStorage.getItem('todos'));
     let data;
     if(query === 'completed'){
      let isCompleted = query === 'completed';
      data = todos.filter(todo => todo.complete === true);
     } else {
              data = todos;
            }
     return data;
   }
  addTodo(newTodo){
     var todos = JSON.parse(localStorage.getItem('todos'));
     todos.unshift(newTodo);
     localStorage.setItem('todos', JSON.stringify(todos));
   }
   deleteTodo(todoText){
     let todos = JSON.parse(localStorage.getItem('todos'));
     for (let i = i < todos.length; i++) {
      if (todos[i].text == todoText) {
        todos.splice(i,1);
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
   }

   updateTodo(oldText,newText){
     var todos = JSON.parse(localStorage.getItem('todos'));

     for(var i=0;i<todos.length;i++){
      if(todos[i].text == oldText){
        todos[i].text = newText;
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
   }

   toggleTodoComplete(todoText){
     var todos = JSON.parse(localStorage.getItem('todos'));

     for(var i=0;i<todos.length;i++){
      if(todos[i].text == todoText){
        todos[i].complete = true;
      }
    }

    localStorage.setItem('todos', JSON.stringify(todos));
   }
}
