import { NoteService } from '../../Services/note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';

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
  constructor( private noteService: NoteService) {
    this.noteService.autoRefresh$.subscribe(() => {
      this.getAllNotes();
    });
   }
  arrayOfColors = [
    [
      { color: 'rgb(255, 179, 255)', name: 'pink' },
      { color: 'rgb(255, 255, 128)', name: 'darkGolden' },
      { color: 'white', name: 'white' }
    ],
    [
      { color: 'slategray', name: 'grey' },
      { color: 'rgb(153, 221, 255)', name: 'light blue' },
      { color: 'rgb(200, 232, 104)', name: 'yellow' }
    ],
    [
      { color: 'rgb(255, 153, 0)', name: 'orange' },
      { color: 'rgb(97, 191, 82)', name: 'green' },
      { color: ' rgb(158, 136, 191)', name: 'darkYellow' }
    ]
  ];
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
