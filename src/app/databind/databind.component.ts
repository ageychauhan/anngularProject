import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dynname : string = "kp"

  //use of method 
  mymethod(){
    return "the name is " + this.dynname
  }

  //conditionbase true false
  appstatus : boolean = true;

  //else second trick
  appstatus2 : boolean = false;
  status1 = "online";
  status2 = "offline";


}
