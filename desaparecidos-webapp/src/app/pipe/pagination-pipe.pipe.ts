import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginationPipe'
})
export class PaginationPipePipe implements PipeTransform {
  transform(value: any[], currentPage:number,perpage:number): any {
    let result =  value.filter((curr,index)=>{
      return index >= (currentPage-1)*perpage && index < currentPage *perpage
    });
    return result;
  }
}
