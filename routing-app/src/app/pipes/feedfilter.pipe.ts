import { Pipe, PipeTransform } from '@angular/core';
import { Feedback } from '../models/feedback';

@Pipe({
  name: 'feedfilter'
})
export class FeedfilterPipe implements PipeTransform {

  transform(target: Feedback[], type:string): any {
    if(type === "All"){
      return target;
    }
    else{
      return target.filter((x:Feedback)=>x.type===type)
    }
  }

}
