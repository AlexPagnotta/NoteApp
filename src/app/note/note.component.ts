import { Component, OnInit, Input, Output } from '@angular/core';
import { Note } from '../classes/note';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'div[app-note]',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input('note-data') note: Note;

  @Output('onDeleteNote') noteDeleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateNote(){
  }

  deleteNote(){
    this.noteDeleted.emit(this.note);
  }

  openNoteDetail(){
  }

}
