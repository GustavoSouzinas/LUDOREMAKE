import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PieceComponent, single_piece } from "../piece/piece.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circle-pieces',
  imports: [PieceComponent, CommonModule],
  templateUrl: './circle-pieces.component.html',
  styleUrl: './circle-pieces.component.css'
})
export class CirclePiecesComponent{

  @Output() piece_selected = new EventEmitter<number>()
  @Output() player_selected = new EventEmitter<number>()
  @Input() color = '';
  @Input() circle_pieces: single_piece[]=[];
  @Input() selected_piece = 0;
  @Input() selected_player = 0;

  piece_selected_pass(id: number){
    this.piece_selected.emit(id);
  }

  player_selected_pass(p: number){
    this.player_selected.emit(p);
  }

  get local_pieces(){
    return this.circle_pieces.filter(p => p.current_pos === 1000)
  }


  }


