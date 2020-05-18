import { NoteService } from '../../Services/note.service';
import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note';
import { MatSnackBar, MatDialog } from '@angular/material';
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
               public dialog: MatDialog, ) {
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
}
