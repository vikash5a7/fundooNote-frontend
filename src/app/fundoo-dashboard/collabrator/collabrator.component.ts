import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Note } from 'src/app/model/note';
import { CollabratorService } from 'src/app/Services/collabrator.service';


@Component({
  selector: 'app-collabrator',
  templateUrl: './collabrator.component.html',
  styleUrls: ['./collabrator.component.scss']
})
export class CollabratorComponent implements OnInit {
  email: string;
  note: Note;
  enterEmail: string;
  error: any;
  constructor(
    private matSnackBar: MatSnackBar,
    private collabratoreService: CollabratorService,
    // tslint:disable-next-line: variable-name
    public _matDialogRef: MatDialogRef<CollabratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.note = this.data.note;
   }

  ngOnInit(
  ) {
    this.email = localStorage.getItem('email');
  }
  close() {
    this._matDialogRef.close();
  }

  addCollabrator(note) {
    this.collabratoreService.addCollabrator(this.enterEmail, note).subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
   );
  }

  handleResponse(data) {
    this._matDialogRef.close();
    this.matSnackBar.open(data.message, 'ok', {
      duration: 5000
    });
   }
   handleError(error: { error: any; }) {
    this._matDialogRef.close();
    this.error = error.error.message;
    if ( error.error.status === 0) {
      console.log('please connect database');
    }
    this.matSnackBar.open(this.error, 'ok', {
      duration: 5000
    });
    console.log(error);
  }

}
