import { Component, OnInit, Inject } from '@angular/core';
import { Label } from 'src/app/model/label';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { LabelService } from 'src/app/Services/label.service';

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {
  label: Label =new Label();
  error = null;

  constructor(
    private labelService : LabelService,
    public _matDialogRef: MatDialogRef<EditLabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackbar: MatSnackBar
  ) {
  }

  ngOnInit() {
  }
  cancel(label) {
    console.log('lable-->' , label.name);
    this._matDialogRef.close();

  }
  createLabel (label: any ) {
    console.log('note name---> '+label.name);
    if(this.label.name!=null)
    {
      this.labelService.createLabel(label).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    }
  }
  handleResponse(data: any) {
    console.log(data);
    this.snackbar.open('Label is created succefully', 'ok', {
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
}
