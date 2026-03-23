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
@Input() disabled = true;
@Input() selected_piece = 0;
@Input() selected_player = 0;
current_player: number = 0;
player_color = "";


selectPiece(id: number){
    this.piece_selected.emit(id);
    
      switch(this.color){
      case "green": this.current_player = 0; this.player_color = "green"; break;
      case "yellow": this.current_player = 1; this.player_color = "yellow"; break;
      case "orange": this.current_player = 2; this.player_color = "orange"; break
      case "blue": this.current_player = 3; this.player_color = "blue"; break;
  }

    this.player_selected.emit(this.current_player);
  }

  get IsSelected(): boolean{
  const colors= ["green", "yellow", "orange", "blue"]
  return this.id === this.selected_piece + 1 && this.color === colors[this.selected_player]

  }

}

export class single_piece{
 constructor(
 public id: number = 0,
 public player_id: number = 0,
 public init_pos: number = 0,
 public current_pos: number = 1000,
 public color: string = "white",
 public final_pos = 2000,
 public final_enter = 2000,
 public final_exit = 2000,
 public square_enter = 2000,
 public has_looped = false,
 public disabled = true,
 ){}


}
