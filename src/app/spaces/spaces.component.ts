import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
import { SingleSpaceComponent, single_space} from "../single-space/single-space.component";
import { PieceComponent, single_piece  } from "../piece/piece.component";

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

@Output() sp_piece_selected = new EventEmitter<number>();
@Output() sp_player_selected = new EventEmitter<number>();
@Input() spaces_color = '';
@Input() p1_pieces: single_piece[]=[]
@Input() p2_pieces: single_piece[]=[]
@Input() p3_pieces: single_piece[]=[]
@Input() p4_pieces: single_piece[]=[]

ngOnInit(): void {
 this.createClassFirstSpaces();
 this.createClassMiddleSpaces();
 this.createClassLastSpaces();
}

sp_piece_selected_pass(id: number){
    this.sp_piece_selected.emit(id);
  }

sp_player_selected_pass(p: number){
    this.sp_player_selected.emit(p);
  }


createClassLastSpaces(){

  for (let i=0; i<6; i++){
    const item = new single_space();
  
    if(i<6){
      item.color = this.spaces_color
    }
    if(i == 1){
      item.arrow = true
      item.color = this.spaces_color
    }
    this.last_spaces.push(item)
  }
}

createClassFirstSpaces(){

  for (let i=0; i<6; i++){
    const item = new single_space();
    if(i<6){
      item.color = this.spaces_color
    }
    if(i == 2){
    item.star = true
    item.color = this.spaces_color
    }
  this.first_spaces.push(item)
  }


}

createClassMiddleSpaces(){
  for (let i=0; i<6; i++){
    const item = new single_space();

    if(i<1){
      item.color = this.spaces_color;
    }

    if(i>0){
      item.color = "white";
      item.final_count = true;
      item.count = false;
    }
  this.middle_spaces.push(item);
  }

}
}


