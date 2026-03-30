import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PieceComponent, SinglePiece } from "../piece/piece.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circle-pieces',
  imports: [PieceComponent, CommonModule],
  templateUrl: './circle-pieces.component.html',
  styleUrl: './circle-pieces.component.css'
})
export class CirclePiecesComponent {

  @Output() pieceSelected = new EventEmitter<number>()
  @Input() color = '';
  @Input() circlePieces: SinglePiece[] = [];
  @Input() selectedPiece = 0;
  @Input() selectedPlayer = 0;

  pieceSelectedPass(id: number) {
    this.pieceSelected.emit(id);
  }

  get localPieces() {
    return this.circlePieces.filter(p => p.currentPos === 1000)
  }


}


