import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-piece',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './piece.component.html',
  styleUrl: './piece.component.css'
})
export class PieceComponent {

@Output() piece_selected = new EventEmitter<number>();
@Output() player_selected = new EventEmitter<number>();
@Input() color = "";
@Input() id = 0;
@Input() current_pos = 0;

current_player: number = 0;

selectPiece(id: number){
    this.piece_selected.emit(id);
    
    switch(this.color){
    case "green": this.current_player = 0; break;
    case "yellow": this.current_player = 1; break;
    case "blue": this.current_player = 2;break
    case "orange": this.current_player = 3;break
  }
    this.player_selected.emit(this.current_player);
  }
}

export class single_piece{
 constructor(
 public id: number = 0,
 public init_pos: number = 0,
 public current_pos: number = 1000,
 public color: string = "white",
 public final_pos = 2000,
 public final_enter = 2000,
 ){}


}
