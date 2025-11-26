import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SingleSpaceComponent, single_space } from "../single-space/single-space.component";

@Component({
  selector: 'app-spaces',
  imports: [CommonModule, SingleSpaceComponent],
  templateUrl: './spaces.component.html',
  styleUrl: './spaces.component.css'
})
export class SpacesComponent implements OnInit {

first_spaces: single_space[]=[]
middle_spaces: single_space[]=[]
last_spaces: single_space[]=[]

@Input() spaces_color = '';

ngOnInit(): void {
 this.createClassFirstSpaces();
 this.createClassMiddleSpaces();
 this.createClassLastSpaces();
}

createClassLastSpaces(){

  for (let i=0; i<6; i++){
    const item = new single_space();
  
    if(i<6)
      item.color = this.spaces_color

    if(i == 1)
      item.arrow = true
      item.color = this.spaces_color

    this.last_spaces.push(item)
  }
}

createClassFirstSpaces(){

  for (let i=0; i<6; i++){
    const item = new single_space();

    if(i<1)
      item.color = this.spaces_color

    if(i == 2)
    item.star = true
    item.color = this.spaces_color

  this.first_spaces.push(item)
  }


}

createClassMiddleSpaces(){
  for (let i=0; i<6; i++){
    const item = new single_space();

    if(i<1)
      item.color = this.spaces_color;

    if(i>2)
      item.color = "white";

  this.middle_spaces.push(item);
  }

}
}


