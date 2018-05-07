import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../classes/note';

@Component({
  selector: 'div[app-note]',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input('note-data') note: Note;

  constructor() { }

  ngOnInit() {
  }

  updateNote(){
  }

  deleteNote(){
  }

  openNoteDetail(){
  }

}
