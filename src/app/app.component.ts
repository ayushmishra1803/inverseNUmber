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
  fractional:boolean=false;
  Developer:boolean=false;
  output:string
  ShowOutput:boolean=false;
  ngOnInit(){

  }
  settypenumber(){
    this.number=true;
    this.nomode=true;
    this.ShowOutput=true
  }
  settypeFraction(){
    this.fractional=true
    this.nomode=true;
     this.ShowOutput=true
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
   this. output="";
    this.ShowOutput=false
  }
  developer(){
    this.Developer=true;
    this.nomode=true

  }
}
