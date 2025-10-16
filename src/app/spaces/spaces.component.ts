import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SingleSpaceComponent } from "../single-space/single-space.component";

@Component({
  selector: 'app-spaces',
  imports: [CommonModule, SingleSpaceComponent],
  templateUrl: './spaces.component.html',
  styleUrl: './spaces.component.css'
})
export class SpacesComponent implements OnInit {



last_spaces: {id: number, row: number, col: number }[] = []
middle_spaces: {id: number, row: number, col: number }[] = []
first_spaces: {id: number, row: number, col: number }[] = []

@Input() spaces_color = '';
show_data = true;

ngOnInit(): void {
 this.createLastSpaces();
 this.createMiddleSpaces();
 this.createFirstSpaces();
}

createFirstSpaces(){
  this.first_spaces.push({ id: 1, row: 1, col: 1 });
  this.first_spaces.push({ id: 2, row: 2, col: 1 });
  this.first_spaces.push({ id: 3, row: 3, col: 1 });
  this.first_spaces.push({ id: 4, row: 4, col: 1 });
}


createLastSpaces(){
  this.last_spaces.push({ id: 1, row: 1, col: 1 });
  this.last_spaces.push({ id: 2, row: 2, col: 1 });
  this.last_spaces.push({ id: 3, row: 3, col: 1 });
}

createMiddleSpaces(){
 this.middle_spaces.push({ id: 1, row: 1, col: 1 });
  this.middle_spaces.push({ id: 2, row: 2, col: 1 });
  this.middle_spaces.push({ id: 3, row: 3, col: 1 });
  this.middle_spaces.push({ id: 4, row: 4, col: 1 });
  this.middle_spaces.push({ id: 5, row: 5, col: 1 });
  }
}


