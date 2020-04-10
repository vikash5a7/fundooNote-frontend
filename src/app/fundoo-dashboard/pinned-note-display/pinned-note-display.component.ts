import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/Services/note.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { Label } from 'src/app/model/label';

@Component({
  selector: 'app-pinned-note-display',
  templateUrl: './pinned-note-display.component.html',
  styleUrls: ['./pinned-note-display.component.scss']
})
export class PinnedNoteDisplayComponent implements OnInit {
  isPin = false;
  notes: [];
  removable = true;
  getAllNotess: [];
  note: Note = new Note();
  label: Label = new Label();
  labels : [];
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
      console.log('Pinned Note are ' + response.obj);
      this.notes = response.obj;
      this.labels = response.obj.list;
      console.log('label are in notes are' + this.label.name)
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
