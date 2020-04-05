import { Component, OnInit, Inject } from '@angular/core';
import { Note } from 'src/app/model/note';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/Services/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  note: Note;
  open=false;
  error = null;
  valueChanged = false;
  constructor(
    public _matDialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteService: NoteService,
    private snackbar: MatSnackBar
  ) {
    this.note = this.data.note;
  }

  ngOnInit() {}
  onSubmit() {
    this._matDialogRef.close();
    if (this.valueChanged==true) {
      console.log(this.note);
      this.noteService.updateNote(this.note).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  }
  handleResponse(data: any) {
    console.log(data);
    this.snackbar.open('Note is updated succefully', 'ok', {
      duration: 5000
    });
  }
  handleError(error: { error: { message: any; }; }) {
    this.error = error.error.message;
    console.log(error);
    this.snackbar.open(this.error, 'ok', {
      duration: 5000
    });
  }
  close() {
    console.log('dialogue closed')
    this._matDialogRef.close();
  }
  detectChange(note) {
    this.valueChanged = true;
    console.log('Value chanhed--->'+ this.valueChanged);
  }
  }
