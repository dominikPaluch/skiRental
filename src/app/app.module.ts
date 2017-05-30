import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {MaterialModule} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import {COMPONENTS} from './components';
import {SERVICES} from './services';
import {reducer} from './store/reducers';
import {CartStore} from './store/cart.store';
import {DataTableModule} from 'angular-2-data-table';


// regiestration
import {fakeBackendProvider} from './registration/_helpers/index';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {BaseRequestOptions} from '@angular/http';
import {AlertComponent} from './registration/_directives/index';
import {AuthGuard} from './registration/_guards/index';
import {AlertService, AuthenticationService, UserService} from './registration/_services/index';
import {HomeComponent} from './registration/home/index';
import {LoginComponent} from './registration/login/index';
import {RegisterComponent} from './registration/register/index';
// regiestration

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    DataTableModule,

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore(reducer),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    /**
     * EffectsModule.run() sets up the effects class to be initialized
     * immediately when the application starts.
     *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */
    // EffectsModule.run(BookEffects),
    // EffectsModule.run(CollectionEffects),

  ],
  // If service is specified in app.module (this file), then all components have access to the SAME instance of that service
  // This is useful when exactly one object is needed to coordinate actions across the system.
  // This is an example of the singleton pattern (Design pattern that restricts the instantiation of a class to one object)
  providers: [
    SERVICES,
    CartStore,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule {
}
