import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/Services/note.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-sample-note',
  templateUrl: './sample-note.component.html',
  styleUrls: ['./sample-note.component.scss']
})
export class SampleNoteComponent implements OnInit {
  @Input() note: Note;
  @Input() arrayOfColors;
  isPin = false;
  notes: [];
  getAllNotess: [];
  constructor( private noteService: NoteService,
                private snackBar: MatSnackBar,
                public dialog: MatDialog,) {

   }
  ngOnInit() {

  }
  pinned(id)
  {
    console.log('pinning.........');
    console.log('id is '+ id);
    this.noteService.pinnedNotes(id).subscribe(res => {
      this.snackBar.open('Note are pinned', "OK", { duration: 3000 });
    })
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
