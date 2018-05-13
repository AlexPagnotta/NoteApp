import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/notes.service';
import { Note } from '../classes/note';

@Component({
  selector: 'app-note-create-edit',
  templateUrl: './note-create-edit.component.html',
  styleUrls: ['./note-create-edit.component.css']
})
export class NoteCreateEditComponent implements OnInit {

  private note: Note;
  private isANewNote: boolean;

  constructor(private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.note = new Note();

    this.route.paramMap.subscribe(
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
    );
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

  }

}
