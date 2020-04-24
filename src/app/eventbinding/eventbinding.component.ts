import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  msg:string = "";
  onAddCart(){

    this.msg="product added in cart"
  }

  msg1:string = "";
  Addcart(event){

    this.msg1=event.target.value + " added in cart"
  }

  //reference variable
  getInputInfo(inputInfo){
    console.log(inputInfo.name)
  }
}
