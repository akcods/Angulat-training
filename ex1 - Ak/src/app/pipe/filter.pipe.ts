import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(target: any, year:string, category:string): any {
    if(year === "All" && category === "All"){
      return target;
    }
    else if(year === "All" && category !== "All"){
      return target.filter((x:any)=>x.category === category)
    }
    else if(year !== "All" && category === "All"){
      return target.filter((x:any)=>x.year === year)
    }
    else{
      return target.filter((x:any)=>x.year===year && x.category === category)
    }
  }

}
