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

  notes: Note[];
  notesToShow: Note[];

  constructor(public dialog: MdcDialog, private service: NoteService) { }

  ngOnInit() {
    this.reloadUi();
  }

  reloadUi() {
    this.service.getNotes()
      .then((result) => {
        console.log('ok: ', result);
        const data = JSON.parse(result);
        this.notes = [];
        data.forEach(element => {
          const note = new Note();
          note.id = element['id'];
          note.title = element['title'];
          note.text = element['text'];
          this.notes.push(note);
          this.notesToShow = Object.assign([], this.notes);
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

    dialogRef.afterClosed().subscribe(result => {
      this.reloadUi();
    });
  }

  onUpdateNote(note) {
    this.reloadUi();
  }

  onNotesSearch(searchString) {
    console.log(searchString);
    this.notesToShow = this.notes.filter(x =>
      x.title.toUpperCase().includes(searchString.toUpperCase()) ||
      x.text.toUpperCase().includes(searchString.toUpperCase()));
  }

  public onDeleteNote(note) {
    console.log('CIAOOO');
    this.service.deleteNote(note)
      .then((result) => {
        // Delete from list
        const id = this.notes.indexOf(note);
        this.notes.splice(id, 1);
      })
      .catch((err) => {
        console.log('error: ', err.message);
      });
  }

}
