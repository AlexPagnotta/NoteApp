import { Component, OnInit, Input, Output } from '@angular/core';
import { Note } from '../classes/note';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'div[app-note]',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('note-data') note: Note;

  // tslint:disable-next-line:no-output-rename
  @Output('onDeleteNote') noteDeleted = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  updateNote() {
    this.router.navigate(['notes', this.note.id, 'edit']);
  }


  deleteNote() {
    this.noteDeleted.emit(this.note);
  }
}
