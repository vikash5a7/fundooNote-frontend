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
  notes: [];
 note: Note = new Note();
  labels : [];
  constructor( private noteService: NoteService,
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
    });
  }
  }
