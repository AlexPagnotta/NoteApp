import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from '../notes/notes.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';

const routes: Routes = 
[
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'notes',
    component: NotesComponent
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
  declarations: []
})
export class RoutingModuleModule { }
