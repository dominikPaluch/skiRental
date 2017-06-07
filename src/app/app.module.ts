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
import { MyDatePickerModule } from 'my-date-picker';

// regiestration
import {fakeBackendProvider} from './registration/_helpers/index';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions} from '@angular/http';
import {AlertComponent} from './registration/_directives/index';
import {AuthGuard} from './registration/_guards/index';
import {AlertService, AuthenticationService, UserService} from './registration/_services/index';
import {HomeComponent} from './registration/home/index';
import {LoginComponent} from './registration/login/index';
import {RegisterComponent} from './registration/register/index';
// regiestration
import {SampleDatePickerNormal} from './components/date-picker-normal/sample-date-picker-normal';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SampleDatePickerNormal,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    DataTableModule,
    MyDatePickerModule,

    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
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

  bootstrap: [AppComponent],

})
export class AppModule {
}
