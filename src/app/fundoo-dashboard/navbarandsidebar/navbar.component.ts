import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { Note } from 'src/app/model/note';
import { EditLabelComponent } from '../label/edit-label/edit-label.component';
import { Label } from 'src/app/model/label';
import { LabelService } from 'src/app/Services/label.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public grid = false;
  public isTrash = false;
  note: Note = new Note();
  label: Label=new Label();
  labelList: [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private token: TokenService,
              private route: Router,
              public dialog: MatDialog,
              public labelService: LabelService,
    ) {
      this.labelService.autoRefresh$.subscribe(() => {
        this.displayAllLabels();
      });
    }
    ngOnInit() {
      this.displayAllLabels();
    }
  displayAllLabels() {
      this.labelService.getAllLabel().subscribe((response: any) => {
        console.log('reponse of label is ---->'+response);
        console.log('inside the lable display')
        this.labelList = response.obj;
        console.log('label are---> ', this.labelList);
      });
  }
  onClickView() {
    this.grid = !this.grid;
  }
  refresh(): void {
    window.location.reload();
}
  logout(event: MouseEvent) {
    console.log('loggout function called');
    event.preventDefault();
    this.token.remove();
    this.token.logedIn(false);
    this.route.navigateByUrl('/login');
  }
  noteDisplay(event: MouseEvent) {
    console.log('note display called');
  }
  openEditLabelDialog() {
    console.log("catched note at simple note ");
    const matDialogueReference = this.dialog.open(EditLabelComponent, {
      width: "330px",
      height: "auto",
      panelClass: "custom-dialog-container",
    });
    matDialogueReference.afterClosed().subscribe(result => {
      console.log("The dialog was closed with out update");
    });
  }

}
