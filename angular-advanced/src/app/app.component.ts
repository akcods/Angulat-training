import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-advanced';

  constructor(private log:LogService,private router:Router){}

  ngAfterViewInit(){

    if(!this.log.getStatus()){
      this.router.navigate(['login'])
    }
    else{
      this.log.usertype=="admin" ? this.router.navigate(['admin/home']) : this.router.navigate(['user/home']);
    }
  }
}
