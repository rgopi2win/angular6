import { Component, OnInit } from '@angular/core';
import { Book } from  '../book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  book: Book = {
    id: 1,
    name: 'The Twelfth Night'
  };
  constructor() { }

  ngOnInit() {
  }

}
