import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { Note } from 'src/app/model/note';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  note: Note = new Note();
  notes: [];
  isEmptyArchivedNotesList = true;
  constructor( private noteService: NoteService) {
                this.noteService.autoRefresh$.subscribe(() => {
                 this.getAllArchiveNote();
    });

   }

  ngOnInit() {
    this.getAllArchiveNote();
  }
  getAllArchiveNote(){
    this.noteService.getArchiveNotes().subscribe((response: any) => {
      console.log(response);
      console.log(' archive note are the-- ' + response.obj);
      this.notes = response.obj;
      if(this.notes!=null){
        this.isEmptyArchivedNotesList = false;
      }
      console.log('Notes: ', this.notes);
    });
  }
}
