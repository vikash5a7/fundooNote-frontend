import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/Services/note.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
  public selectedMoment = new Date();
  isPin = false;
  notes: [];
  getAllNotess: [];
  note: Note = new Note();
  constructor( private noteService: NoteService,
    private snackBar: MatSnackBar) {
  this.noteService.autoRefresh$.subscribe(() => {
this.getReminderNotes();
});
}
ngOnInit() {
this.getReminderNotes();
}
getReminderNotes() {
    this.noteService.getReminderNotes().subscribe((response: any) => {
      console.log(response);
      console.log('note are the-- ' + response.obj);
      this.notes = response.obj;
      console.log('Notes: ', this.notes);
    });
  }
}
