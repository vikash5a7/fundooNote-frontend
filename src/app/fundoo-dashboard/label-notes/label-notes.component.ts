import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatDialog } from '@angular/material';

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

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
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
