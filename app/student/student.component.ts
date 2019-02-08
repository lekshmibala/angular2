import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
@Input() rollno:number;
 @Input() name:string;
  @Input() image:string;
  @Input() batch:string; 
 @Output() sendstudent:EventEmitter<any>=new EventEmitter;
 selectstu(){
  let selectedstu:any={srollno:this.rollno,
  sname:this.name,sbatch:this.batch};
  this.sendstudent.emit(selectedstu);
 }
  constructor() { }

  ngOnInit() {
  }

}

