import { Component, OnInit } from '@angular/core';
import {BOOKS} from "../book-array";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books= BOOKS.slice(0,4);
  constructor() { }

  ngOnInit() {
  }

}
