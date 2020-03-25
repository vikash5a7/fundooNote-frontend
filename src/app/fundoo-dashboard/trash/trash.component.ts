import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  isEmptyTrashedNotesList = false;
  note: Note = new Note();
  notes: [];
  constructor() { }

  ngOnInit() {
  }

}
