import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  public studentdetails:any=[{rollno:"1",name:"joyes",batch:"cs"},
  {rollno:"2",name:"jnoel",batch:"ec"},
  {rollno:"3",name:"aby",batch:"eee"}];

  vwstudent:any;
  addStudent(data:any){
    this.vwstudent=data;
  }

  constructor() { }

  ngOnInit() {
  }

}
