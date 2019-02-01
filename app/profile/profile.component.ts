import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  check:boolean=true;
  constructor() {
    this.user={name:'Divya John',
  job:'MCA Student',
 address:'Pottamplackal H , Payyavoor PO , Kannur , Kerala',
  
    Phone:[]
    
   };
  }
samplecheck(){
  this.check=!this.check;
}
  ngOnInit() {
  }

}
