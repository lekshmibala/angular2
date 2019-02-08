import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  public Bookdetails:any=[{title:"Me before you",author:"joyes",publisher:"bookviewpublisher"},
  {title:"I too had a love story",author:"chetan baghat",publisher:"westpublisher"},
  {title:"Two states",author:"chetan baghat",publisher:"viewpublisher"}];

  selbook:any;
  addBook(data:any){
    this.selbook=data;
  }

  constructor() { }

  ngOnInit() {
  }

}
