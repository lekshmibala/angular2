import { Component, OnInit } from '@angular/core';
import {student} from '../student';
import {from} from 'rxjs';
import {NgForm} from '@angular/forms';
import {ServicedemoService} from '../servicedemo.service';


@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  student=new student();
  isRegistered=false;

  constructor(private service: ServicedemoService) { }

  ngOnInit() {

    
  }
  apply(f:NgForm)
  {
    this.service.store(this.student).subscribe(
      data =>{
        this.isRegistered=true;
        console.log("registered successfully");
        f.reset();
      },
      (err) => {this.isRegistered=false;
        console.log("registered not successfully");
      }
    );
  }

}
