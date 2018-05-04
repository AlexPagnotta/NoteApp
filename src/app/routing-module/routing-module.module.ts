import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from '../notes/notes.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = 
[
  {
    path: 'notes',
    component: NotesComponent
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
