import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/Services/note.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  isEmptyTrashedNotesList = false;
  note: Note = new Note();
  notes: [];
  isTrash=false;
  constructor(private noteService: NoteService,
              private snackBar: MatSnackBar) {
                this.noteService.autoRefresh$.subscribe(() => {
                  this.getAllTrashedNotes();
                });
              }

  ngOnInit() {

    this.getAllTrashedNotes();
  }
  getAllTrashedNotes(){
    this.noteService.getTrashedNotes().subscribe((response: any) => {
      console.log(response);
      console.log('note are the-- ' + response.obj);
      this.notes = response.obj;
      console.log('Notes: ', this.notes);
    });
  }
  restoreNote(id) {
    console.log('deleting note--->>' + id);
    this.noteService.deleteNote(id).subscribe(res => {
      this.snackBar.open("Note is restored", "OK", { duration: 3000 });
    })
  }

  deletePermanetly(id){
    console.log('Deleting permanetly note '+ id);
    this.noteService.deleteNotePermanetly(id).subscribe(
      res => {
        this.snackBar.open("Note deleted Permanetly", "ok");
      }
    )
  }
}
