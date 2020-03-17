import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/Services/note.service';
import { TokenService } from '../../Services/token.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  open = false;
  isPinned = false;
  note: Note = new Note();
  tokenValue = null;
  error = null;

  constructor(
    private noteService: NoteService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }
  onClickCreateNoteOpen() {
    this.open = true;
  }

  onSubmit() {
    this.open = false;
    if (this.note.description != null) {
      this.tokenValue = localStorage.getItem('token');
      console.log(this.note);
      console.log(this.tokenValue);
      this.noteService.createNote(this.note).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
      this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['fundoo']);
  });
}
  }
  handleResponse(data: any) {
    console.log(data);
    this.matSnackBar.open('Note is created succefully', 'ok', {
      duration: 5000
    });
  }
  handleError(error: { error: { message: any; }; }) {
    this.error = error.error.message;
    console.log(error);
    this.matSnackBar.open(this.error, 'ok', {
      duration: 5000
    });
  }
}
