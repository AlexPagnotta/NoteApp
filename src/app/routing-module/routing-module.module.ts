import { NoteCreateEditComponent } from './../note-create-edit/note-create-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from '../notes/notes.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { RouteGuardService } from '../route-guard.service';

const routes: Routes =
  [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'signup',
      component: SignupComponent
    },
    {
      path: 'notes',
      component: NotesComponent,
      canActivate: [RouteGuardService]
    },
    {
      path: '',
      redirectTo: 'notes',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [RouteGuardService],
  declarations: []
})
export class RoutingModuleModule { }
