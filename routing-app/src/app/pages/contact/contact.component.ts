import { Component, OnInit } from '@angular/core';
import { contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactList:contact[]=[];
  constructor(private cs:ContactService) {
    this.cs.getContacts().subscribe({
      next:(data:any)=>this.contactList=data,
      error:(err:any)=>this.contactList=[]
    });

  }


  ngOnInit(): void {
  }

}
