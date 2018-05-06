import { Injectable } from "@angular/core";
import { Note } from "../classes/note";
import { Http, Response, Headers } from '@angular/http';
import { AuthService } from "./auth.service";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NoteService {

    notes: Note[] = [];
    private url: string = 'http://localhost:8000/api';
  
    constructor(private http: Http, private auth: AuthService){
    }
    
    getNotes(): Promise<string> {
        return this.http
            .get(`${this.url}/notes`)      
          .toPromise()
          .then(res => res.text());
    }
}