import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/Services/note.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Label } from 'src/app/model/label';
import { LabelService } from 'src/app/Services/label.service';
import { CollabratorComponent } from '../collabrator/collabrator.component';

@Component({
  selector: 'app-iconlist',
  templateUrl: './iconlist.component.html',
  styleUrls: ['./iconlist.component.scss']
})
export class IconlistComponent implements OnInit {
  constructor( private noteService: NoteService,
               private snackBar: MatSnackBar,
               public labelService: LabelService,
               public dialog: MatDialog
    ) {
      this.labelService.autoRefresh$.subscribe(() => {
        this.displayAllLabels();
      });
    }
  @Input() note: Note;
  public dateTime = null ;
  public checked = false;
  public removable = true;
  public removableLabel = true;
  label: Label = new Label();
  labelList = [];
  labels: [];
  SearchTeram: null;
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
      this.displayAllLabels();
    }
  setColor(color) {
    console.log('note id--->' , this.note.id);
    this.noteService.addColor(this.note.id, color).subscribe(res => {
      this.snackBar.open('color Changed', 'OK', { duration: 3000 });
    });
  }
  deleteNote(id) {
    console.log('Restoring note id is --->>' + id);
    this.noteService.deleteNote(id).subscribe(res => {
      this.snackBar.open('Note is trashed', 'OK', { duration: 3000 });
    });
  }
  archive(id) {
    console.log('archive note id------>' + id);
    this.noteService.archiveNote(id).subscribe(res => {
      this.snackBar.open('Note is archived', 'OK', { duration: 3000 });
    });
  }
  removeReminder(id) {
    console.log('remove reminder note id------>' + id);
    this.removable = false;
    this.noteService.removeReminder(id).subscribe(res => {
      this.snackBar.open('Removed reminder successfully', 'OK', { duration: 3000 });
    });
  }
  setReminder(id) {
  console.log('reminder----->' + id);
  if (this.dateTime != null) {
  this.noteService.addreminder(id, this.dateTime).subscribe(res => {
    this.snackBar.open('Reminder added successfully at ' + this.dateTime, 'OK', { duration: 3000 });
  });
  } else {
 this.snackBar.open('Reminder not Updated', 'OK', { duration: 3000 });
  }
  }

  makeCopy(note) {
    console.log('the given dat-->' + note);
    this.noteService.createNote(note).subscribe(res => {
    this.snackBar.open('Note copied ', 'OK', { duration: 3000 });
  });
  }
  stopPropagation(event) {
    event.stopPropagation();
}
addNoteToLabel(label) {
  console.log('label id is-->' + label.labelId);
  console.log('Note id is -->' + this.note.id);
  console.log('checked value is' + this.checked);
  if (!this.checked) {
  this.labelService.addLabelOnNote(label.labelId, this.note.id).subscribe(
    res => {
      this.snackBar.open('label Set sucessfully', 'Ok', {duration: 3000});
    }
  );
  }
}
displayAllLabels() {
  this.labelService.getAllLabel().subscribe((response: any) => {
    console.log('reponse of label is ---->' + response);
    console.log('inside the lable display');
    this.labelList = response.obj;
    console.log('label are---> ', this.labelList);
  });
}

removeLabel(label) {
  console.log('Removing label id is-->' + label.labelId);
  console.log('removing Note id is -->' + this.note.id);
  this.removableLabel = false;
  this.labelService.removingLabelOnNote(label.labelId, this.note.id).subscribe(
    res => {
      this.snackBar.open('Label removed', 'Ok', {duration: 3000});
    }
  );
}


openDialog(note) {
  console.log('catched note at simple note ', note);
  const matDialogueReference = this.dialog.open(CollabratorComponent, {
    width: '500px',
    height: 'auto',
    panelClass: 'custom-dialog-container',
    data: { note }
  });
  matDialogueReference.afterClosed().subscribe(result => {
    console.log('The dialog was closed with out update');
  });
}
}
