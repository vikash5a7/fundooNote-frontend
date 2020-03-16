import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  open = false;
  isPinned = false;
  noteDetails: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  onClickCreateNoteOpen() {
    this.open = true;
  }
  onSubmit() {
    this.open = false;
  }
}
