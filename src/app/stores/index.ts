import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import * as RouterReducer from '@ngrx/router-store';
import { MyRouterState } from './router.helper';

export interface State {
    router: RouterReducer.RouterReducerState<MyRouterState>;
}

export const reducers:ActionReducerMap<State> = {
    router: RouterReducer.routerReducer
};

export function logger(reducer:ActionReducer<State>): ActionReducer<State> {
    return function(state:State, action:any): State {
        console.log('state: ', state);
        console.log('action: ', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];