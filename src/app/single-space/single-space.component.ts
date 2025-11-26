import { CommonModule } from '@angular/common';
import { Component, input, Input} from '@angular/core';
import { OnInit } from '@angular/core';

let counter = 0

@Component({
  selector: 'app-single-space',
  imports: [CommonModule],
  templateUrl: './single-space.component.html',
  styleUrl: './single-space.component.css'
})
export class SingleSpaceComponent implements OnInit {

  number: number | null = null;

  ngOnInit(){ 
  
  if(this.count){
      counter++;
      this.number = counter;
    }}

  @Input() color = "";
  @Input() show_star = false;
  @Input() show_arrow = false;
  @Input() count = true;
  
}

export class single_space{
  constructor (
  public star: boolean = false,
  public arrow: boolean = false,
  public color: string = "white",
  public count: boolean = true
  ){}
  
  }