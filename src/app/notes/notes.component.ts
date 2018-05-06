import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private service: NoteService) { }

  ngOnInit() {
    this.service.getNotes()
     .then((result) => {
      console.log("ok: ",result);
    })
    .catch((err) => {
      console.log("error: ",err.message);
    });
  }

}
