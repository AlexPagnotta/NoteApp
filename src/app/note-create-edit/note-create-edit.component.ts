import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { NoteService } from '../services/notes.service';
import { Note } from '../classes/note';
import { MdcDialogRef } from '@angular-mdc/web';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-create-edit',
  templateUrl: './note-create-edit.component.html',
  styleUrls: ['./note-create-edit.component.scss']
})
export class NoteCreateEditComponent implements OnInit {

  private note: Note;
  private isANewNote: boolean;

  constructor(private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router,
    public dialogRef: MdcDialogRef<NoteCreateEditComponent>,
    private service: NoteService) { }

  ngOnInit() {

    this.note = new Note();

    if (!this.dialogRef.data) {
      this.isANewNote = true;
      return;
    } else {
      const id: number = this.dialogRef.data.id;

      this.getNoteData(id);
      this.isANewNote = false;
    }

    /*this.route.paramMap.subscribe(
      (params) => {
        if (!params.get('id')) {
          this.isANewNote = true;
          return;
          // It create a note, there is no note id
        }
        const id = params.get('id');
        this.getNoteData(id);
        this.isANewNote = false;
      }
    );*/


  }

  getNoteData(id) {
    this.noteService.getNote(id)
    .then((result) => {
      console.log('ok: ', result);
      const data = JSON.parse(result);
      const note = new Note();
      note.id = data['id'];
      note.title = data['title'];
      note.text = data['text'];
      this.note = note;
    })
    .catch((err) => {
     console.log('error: ', err.message);
    });
  }

  saveNote() {
    if (!this.isANewNote) {
      this.updateNote();
    } else {
      this.createNote();
    }

    this.router.navigate(['notes']);
  }

  updateNote() {
    this.noteService.updateNote(this.note)
    .then((result) => {
      console.log('ok: ', result);
    })
    .catch((err) => {
      console.log('error: ', err.message);
    });
  }

  createNote() {
    this.noteService.createNote(this.note)
    .then((result) => {
      console.log('ok: ', result);
    })
    .catch((err) => {
      console.log('error: ', err.message);
    });
  }

  deleteNote() {

    this.service.deleteNote(this.note)
    .then((result) => {
      // Delete from list
      //const id = this.notes.indexOf(note);
      //this.notes.splice(id, 1);
      console.log('Deleted');
    })
    .catch((err) => {
      console.log('error: ', err.message);
    });

    this.dialogRef.close("a"); //TODO if empty doesn reload, cause doesnt enter the after closed method
    }
}
