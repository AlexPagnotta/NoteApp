import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/notes.service';
import { Note } from "../classes/note";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];

  constructor(private service: NoteService) { }

  ngOnInit() {
    this.service.getNotes()
     .then((result) => {
      console.log("ok: ",result);
      let data = JSON.parse(result); 
      data.forEach(element => {
        let note = new Note();
        note.id = element['id'];
        note.title = element['title'];
        note.text = element['text'];
        this.notes.push(note);
        console.log(note.text);
     });
    })
    .catch((err) => {
      console.log("error: ",err.message);
    });
  }

}
