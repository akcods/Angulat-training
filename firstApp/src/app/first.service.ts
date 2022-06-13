import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  private series:any={film:"Batman trilogy"};
  constructor() { }

  getSeries():string{
    return this.series;
  }
  setSeries(data:string){
    this.series.film = data;
  }
  
}
