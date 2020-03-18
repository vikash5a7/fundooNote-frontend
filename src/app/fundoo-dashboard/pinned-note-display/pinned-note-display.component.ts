import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/Services/note.service';

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
  constructor( private noteService: NoteService) {
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
