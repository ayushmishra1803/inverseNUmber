import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'inversenumber';
  number:boolean=false;
  nomode:boolean=false
  fractional:boolean=false
  output:string
  ngOnInit(){

  }
  settypenumber(){
    this.number=true;
    this.nomode=true
  }
  settypeFraction(){
    this.fractional=true
    this.nomode=true
  }
  numbersubmit(f:NgForm)
  {
    this.output="1/"+f.value.num;

  }
  fractionSubmit(f:NgForm){
    this.output=`${f.value.num}/${f.value.dem}`
  }
  changeMode(){
    this.number=false;
    this.fractional=false;
    this.nomode=false;
   this. output=""
  }
}
