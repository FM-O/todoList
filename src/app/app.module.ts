import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { reducers } from './stores';
import { metaReducers } from './stores';
import { MyRouterStateSerializer } from './stores/router.helper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'todo', pathMatch: 'full' },
      { path:'todo', loadChildren: './todo/todo.module#TodoModule' }
    ]),
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'to do'
    }),
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: MyRouterStateSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
