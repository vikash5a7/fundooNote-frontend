import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchNote'
})
export class SearchNotePipe implements PipeTransform {

  transform(notes: any, searchTerm: string) {
    console.log('searchin elements are' + searchTerm);
    if ( !notes || !searchTerm) {
      return notes;
    }
    // tslint:disable-next-line: no-shadowed-variable
    return notes.filter( notes =>
     notes.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
   }
}
