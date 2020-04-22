import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mltclasses = {
    class1:true,
    class2:true,
    class3:true,
  }

  mltstyle = {
    'background' : 'blue',
    'border': 'green 10px solid',
    'color' : 'white',
    'font-size' : '30px',
    'font-family':'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    'font-weight':'800',
  }
}
