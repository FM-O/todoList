import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Todo } from './todo.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodo():Observable<Todo[]> {
    return timer(2000).pipe(
      map(() => [{
          id: '1',
          message: 'travail',
          done: false
        },
        {
          id: '2',
          message: 'movie',
          done: false
        }]
      )
    );
  }
}