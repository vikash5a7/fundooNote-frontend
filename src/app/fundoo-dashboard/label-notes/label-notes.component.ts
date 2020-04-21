import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { LabelService } from 'src/app/Services/label.service';

@Component({
  selector: 'app-label-notes',
  templateUrl: './label-notes.component.html',
  styleUrls: ['./label-notes.component.scss']
})
export class LabelNotesComponent implements OnInit {
  isPin = false;
  notes: [];
  getAllNotess: [];
  note: Note = new Note();
  id: any;

  constructor(
    public dialog: MatDialog,
    private _Activatedroute:ActivatedRoute,
    private router: Router,
    private labelService: LabelService
  ) {
    // this is for the forcing reloading the component if something change in paramenter
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit() {
    this.getAllNotes();
  }
  getAllNotes() {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this.labelService.getAllLabelNotes(this.id).subscribe((response: any) => {
      console.log(response);
      console.log('note are the-- ' + response.obj);
      this.notes = response.obj;
      console.log('Notes: ', this.notes);
    });
  }
  openDialog(note) {
    console.log("catched note at simple note ", note);
    const matDialogueReference = this.dialog.open(UpdateNoteComponent, {
      width: "500px",
      height: "auto",
      panelClass: "custom-dialog-container",
      data: { note }
    });
    matDialogueReference.afterClosed().subscribe(result => {
      console.log("The dialog was closed with out update");
    });
  }

}
