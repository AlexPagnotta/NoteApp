import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { RoutingModuleModule } from './routing-module/routing-module.module';
import { AuthRequestOptions } from './auth-classes/auth.request';
import {RequestOptions} from '@angular/http';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModuleModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    {
      provide: RequestOptions, 
      useClass: AuthRequestOptions
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
