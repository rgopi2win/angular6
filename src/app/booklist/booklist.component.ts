import { Component, OnInit } from '@angular/core';
import { Book } from  '../book';
import { BOOKS } from "../book-array";
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books= BOOKS;
 
  constructor() { }

  ngOnInit() {
  }

}
