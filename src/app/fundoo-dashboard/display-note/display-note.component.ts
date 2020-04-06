import { NoteService } from '../../Services/note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { MatSnackBar, MatDialog } from '@angular/material';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  isPin = false;
  notes: [];
  getAllNotess: [];
  note: Note = new Note();
  constructor( private noteService: NoteService,
                private snackBar: MatSnackBar,
                public dialog: MatDialog,) {
    this.noteService.autoRefresh$.subscribe(() => {
      this.getAllNotes();
    });
   }
  ngOnInit() {
    this.getAllNotes();
  }


  getAllNotes() {
    this.noteService.getAllNotes().subscribe((response: any) => {
      console.log(response);
      console.log('note are the-- ' + response.obj);
      this.notes = response.obj;
      console.log('Notes: ', this.notes);
    });
  }
  pinned(id)
  {
    console.log('pinning.........');
    console.log('id is '+ id);
    this.noteService.pinnedNotes(id).subscribe(res => {
      this.snackBar.open('Note are pinned', "OK", { duration: 3000 });
    })
  }
  openDialog() {
    console.log("catched note at simple note ", );
    const matDialogueReference = this.dialog.open(UpdateNoteComponent, {
      width: "500px",
      height: "auto",
      panelClass: "custom-dialog-container",
      data: {  }
    });
    matDialogueReference.afterClosed().subscribe(result => {
      console.log("The dialog was closed with out update");
    });
  }
}
