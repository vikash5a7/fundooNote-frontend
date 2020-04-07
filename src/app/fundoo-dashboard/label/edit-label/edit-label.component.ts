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
  labelList: [];
  renameClicked = true;

  constructor(
    private labelService : LabelService,
    public _matDialogRef: MatDialogRef<EditLabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackbar: MatSnackBar
    ) {
      this.labelService.autoRefresh$.subscribe(() => {
        this.displayAllLabels();
      });
    }
    ngOnInit() {
      this.displayAllLabels();
    }
  displayAllLabels() {
      this.labelService.getAllLabel().subscribe((response: any) => {
        console.log('reponse of label is ---->'+response);
        console.log('inside the lable display')
        this.labelList = response.obj;
        console.log('label are---> ', this.labelList);
      });
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
deleteLabel(lable) {
  console.log('delete id.....' + this.label);
  this.labelService.deleteLabel(lable).subscribe(res => {
    this.snackbar.open('Label Deleted', "OK", { duration: 3000 });
})
}
renameLabel() {
  console.log()
}
done(){
  console.log('done');
  this._matDialogRef.close();
}
onInputClick()
{

}
}
