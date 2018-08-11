import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/notes.service';
import { Note } from '../classes/note';
import { MdcDialog } from '@angular-mdc/web';
import { NoteCreateEditComponent } from '../note-create-edit/note-create-edit.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];

  constructor(public dialog: MdcDialog, private service: NoteService) { }

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
    const dialogRef = this.dialog.open(NoteCreateEditComponent, {
      escapeToClose: true,
      clickOutsideToClose: true,
      backdrop: true
    });
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
