import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { single_piece, PieceComponent } from '../piece/piece.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  imports: [PieceComponent, CommonModule],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})

export class SquareComponent implements OnChanges{

  @Input() square_color = '';
  @Input() square_pieces: single_piece[]=[]
  @Input() square_number = 0;
  @Input() selected_player:number = 0;
  @Input() selected_piece:number = 0;

  @Output() full = new EventEmitter<{player: number; isFull: boolean }>();
  private was_full = false

  get local_pieces(){
    return this.square_pieces.filter(p=> p.current_pos === this.square_number)
  }

  get isFull(){
    return this.local_pieces.length >= 4;
  }



ngOnChanges(changes:SimpleChanges){
  const isFull = this.isFull;
  if (isFull !== this.was_full){
      this.was_full = isFull;

      if(isFull){
      const player = this.local_pieces[0].player_id
      this.full.emit({player, isFull})
      }
  }
}
}
