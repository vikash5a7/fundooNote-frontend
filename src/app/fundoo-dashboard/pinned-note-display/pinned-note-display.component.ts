import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/Services/note.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-pinned-note-display',
  templateUrl: './pinned-note-display.component.html',
  styleUrls: ['./pinned-note-display.component.scss']
})
export class PinnedNoteDisplayComponent implements OnInit {
  isPin = false;
  notes: [];
  getAllNotess: [];
  note: Note = new Note();
  constructor( private noteService: NoteService,
                private snackBar: MatSnackBar,
                public dialog: MatDialog,) {
    this.noteService.autoRefresh$.subscribe(() => {
      this.getAllPinnedNotes();
    });
   }
  ngOnInit() {
    this.getAllPinnedNotes();
  }

  getAllPinnedNotes() {
    this.noteService.getAllPinnedNotes().subscribe((response: any) => {
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
