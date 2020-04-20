import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-collabrator',
  templateUrl: './collabrator.component.html',
  styleUrls: ['./collabrator.component.scss']
})
export class CollabratorComponent implements OnInit {
  email: String;

  constructor(
    public _matDialogRef: MatDialogRef<CollabratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit(

  ) {
    this.email =localStorage.getItem('email');
    }
  close() {
    console.log('dialogue closed')
    this._matDialogRef.close();
  }
}
