import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { todoReducer } from './store/todo.reducer';
import { TodoEffects } from './store/todo.effects';



@NgModule({
  declarations: [TodoComponent, TodoListComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    StoreModule.forFeature('todos', todoReducer),
    EffectsModule.forFeature([TodoEffects]),
    RouterModule.forChild([
      { path: '', component: TodoComponent, children: [
        { path: ':id', component: TodoListComponent },
        { path: '', component: TodoListComponent },
      ] },
    ])
  ]
})
export class TodoModule { }
