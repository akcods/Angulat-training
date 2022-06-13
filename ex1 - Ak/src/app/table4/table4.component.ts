import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-table4',
  templateUrl: './table4.component.html',
  styleUrls: ['./table4.component.css']
})
export class Table4Component implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['year', 'category', 'name', 'laureates'];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<prizes>();
  constructor(private ss:ServicesService){}
  
  ngOnInit(){
    this.ss.getPrize().subscribe({
      next:(res:any)=>{
        this.dataSource.data = res;
      },
      error:()=>this.dataSource.data=[]
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

export interface Laureates{
  id:number;
  firstname:string;
  surname:string;
  motivation:string;
  share:number
}

export interface prizes{
  year:number;
  category:string;
  laureates:Laureates;
}