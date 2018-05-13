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

  constructor(private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.note = new Note();

    this.route.paramMap.subscribe(
      (params) => {
        if (!params.get('id')) {
          return;
          // It create a note, there is no note id
        }
        const id = params.get('id');
        this.getNoteData(id);
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
  }

  updateUser() {

  }

  createUser() {

  }

}
