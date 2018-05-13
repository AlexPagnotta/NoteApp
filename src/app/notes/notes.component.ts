import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/notes.service';
import { Note } from '../classes/note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];

  constructor(private service: NoteService, private router: Router) { }

  ngOnInit() {
    this.service.getNotes()
     .then((result) => {
      console.log('ok: ', result);
      const data = JSON.parse(result);
      data.forEach(element => {
        const note = new Note();
        note.id = element['id'];
        note.title = element['title'];
        note.text = element['text'];
        this.notes.push(note);
        console.log(note.text);
     });
    })
    .catch((err) => {
      console.log('error: ', err.message);
    });
  }

  createNote() {
    this.router.navigate(['notes/new']);
  }

  onDeleteNote(note) {
    this.service.deleteNote(note)
    .then((result) => {
      // Delete from list
      const id = this.notes.indexOf(note);
      this.notes.splice(id, 1);
      console.log('Deleted');
    })
    .catch((err) => {
      console.log('error: ', err.message);
    });
  }

}
