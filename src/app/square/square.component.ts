import { Component, Input } from '@angular/core';
import { single_piece, PieceComponent } from '../piece/piece.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  imports: [PieceComponent, CommonModule],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})

export class SquareComponent {

  @Input() square_color = '';
  @Input() square_pieces: single_piece[]=[]
  @Input() square_number = 0;
  @Input() selected_player:number = 0;
  @Input() selected_piece:number = 0;

  get local_pieces(){
    return this.square_pieces.filter(p=> p.current_pos === this.square_number)
  }

  

}
