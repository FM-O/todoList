import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';
import * as RouterReducer from '@ngrx/router-store';
import { MyRouterState } from '../../stores/router.helper';
import { Todo } from '../../todo.model';


const todosSelector = createFeatureSelector<TodoState>('todos');
const routerSelector = createFeatureSelector<RouterReducer.RouterReducerState<MyRouterState>>('router');

export const todoListSelector = createSelector(
    todosSelector,
    (todoState:TodoState) => {
        return todoState.datas;
    }
);

export const myRouterStateSelector = createSelector(
    routerSelector,
    (routerState:RouterReducer.RouterReducerState<MyRouterState>) => {
        return routerState.state;
    }
);

export const todoListArraySelector = createSelector(
    todosSelector,
    (todoState: TodoState) => {
        if (todoState.datas) {
            return Object.keys(todoState.datas).map(idTodo => todoState.datas[idTodo]);
        } else {
            return null;
        }
    }
);

export const selectedTodoSelector = createSelector(
    todoListSelector,
    myRouterStateSelector,
    (todos: { [todoId:string]: Todo }, myRouterState: MyRouterState) => {
        const todoId = myRouterState.params.id;
        if (todoId && todos) {
            return todos[todoId];
        } else {
            return null;
        }
    }
);