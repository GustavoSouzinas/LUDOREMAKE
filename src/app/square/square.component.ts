import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SinglePiece, PieceComponent } from '../piece/piece.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  imports: [PieceComponent, CommonModule],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})

export class SquareComponent implements OnChanges {

  @Input() squareColor: string = '';
  @Input() squarePieces: SinglePiece[] = []
  @Input() squareNumber: number = 0;
  @Input() selectedPlayer: number = 0;
  @Input() selectedPiece: number = 0;

  @Output() full = new EventEmitter<{ player: number; isFull: boolean }>();
  private wasFull = false

  get locaPieces() {
    return this.squarePieces.filter(p => p.currentPos === this.squareNumber)
  }

  get isFull() {
    return this.locaPieces.length >= 4;
  }



  ngOnChanges(_changes: SimpleChanges) {
    const isFull = this.isFull;
    if (isFull !== this.wasFull) {
      this.wasFull = isFull;

      if (isFull) {
        const player = this.locaPieces[0].playerId
        this.full.emit({ player, isFull })
      }
    }
  }
}
