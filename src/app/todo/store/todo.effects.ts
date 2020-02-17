import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { FETCH_TODO, FetchTodo, FetchTodoSuccess, FetchTodoError } from './todo.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo.model';

@Injectable()
export class TodoEffects {
    @Effect()
    public fetchTodo$: Observable<Action> = this.actions$.pipe(
        ofType(FETCH_TODO),
        switchMap((fetchTodo:FetchTodo) => {
            return this.todoService.getTodo();
        }),
        map((todo: Todo[]) => {
            return new FetchTodoSuccess(todo);
        }),
        catchError((err:any) => {
            return of(new FetchTodoError(err));
        })
    )

    constructor(
        private actions$: Actions,
        private todoService:TodoService
    ) {}
}