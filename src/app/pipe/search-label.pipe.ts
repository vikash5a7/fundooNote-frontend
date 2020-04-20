import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchLabel'
})
export class SearchLabelPipe implements PipeTransform {
  transform(labelList: any, SearchTeram: String){
    if(!labelList|| !SearchTeram){
      return labelList;
    }
    return labelList.filter(
      label=>label.name.toLowerCase().indexOf(SearchTeram.toLowerCase())!==-1);
  }
}
