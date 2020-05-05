import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() SearchTeram: string;
  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
  }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
