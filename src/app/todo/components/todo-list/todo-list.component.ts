import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../../todo.model';
import { Store, select } from '@ngrx/store';
import { State } from '../../../stores';
import * as todosAction from '../../store/todo.actions';
import { selectedTodoSelector, todoListArraySelector } from '../../store/selectors';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<Todo[]> = this.store.pipe(select(todoListArraySelector));
  public selectedTodo$:Observable<Todo> = this.store.pipe(select(selectedTodoSelector));
  
  public message: string;

  constructor(
    private store:Store<State>) {}

  ngOnInit() {
    this.store.dispatch(new todosAction.FetchTodo());
  }

  public addTodo() {
    this.store.dispatch(new todosAction.CreateTodo({
      message: this.message,
      done: false,
      id: uuid()
    }));
    this.message ='';
  }

  public toggleTodo(id: string) {
    this.store.dispatch(new todosAction.ToggleTodo(id));
  }

  public deleteTodo(id: string) {
    this.store.dispatch(new todosAction.DeleteTodo(id));
  }
}