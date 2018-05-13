import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NoteService {

    private url = 'http://localhost:8000/api';

    constructor(private http: Http, private auth: AuthService) {
    }

    getNotes(): Promise<string> {
        return this.http
            .get(`${this.url}/notes`)
          .toPromise()
          .then(res => res.text());
    }

    getNote(id): Promise<string> {
        return this.http
            .get(`${this.url}/notes/` + id)
          .toPromise()
          .then(res => res.text());
    }

    createNote(note): Promise<string> {
        return this.http
            .post(this.url + '/notes' , note)
            .toPromise()
            .then(res => res.text());
    }

    updateNote(note): Promise<string> {
        note['_method'] = 'PUT';
        return this.http
            .post(this.url + '/notes/' + note.id, note)
            .toPromise()
            .then(res => res.text());
    }

    deleteNote(note): Promise<string> {
        const data = {_method: 'DELETE'};
        return this.http
            .post(this.url + '/notes/' + note.id, data)
            .toPromise()
            .then(res => res.text());
      }
}
