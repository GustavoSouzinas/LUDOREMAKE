import { CommonModule } from '@angular/common';
import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

import { PieceComponent, SinglePiece } from "../piece/piece.component";

type Piece = {
  currentPos: number
  id: number
  playerId: number
  color: string
  disabled: boolean
}

let counter = 0
let finalCounter = 2000

@Component({
  selector: 'app-single-space',
  imports: [CommonModule, PieceComponent],
  templateUrl: './single-space.component.html',
  styleUrl: './single-space.component.css'
})
export class SingleSpaceComponent implements OnInit {


  stylePieces: Piece[] = []

  number: number | null = null;
  finalNumber: number | null = null;
  currentPlayer: number = 0;

  ngOnInit() {
    if (this.count) {
      this.number = counter;
      counter++;
    }
    if (this.finalCount) {
      this.finalNumber = finalCounter
      finalCounter++
    }
  }

  @Output() spPieceSelected = new EventEmitter<number>();
  @Output() spPlayerSelected = new EventEmitter<number>();
  @Input() color: string = "";
  @Input() showStar: boolean = false;
  @Input() showArrow: boolean = false;
  @Input() count: boolean = true;
  @Input() finalCount: boolean = false;
  @Input() selectedPiece: number = 0;
  @Input() selectedPlayer: number = 0;
  @Input() p1Pieces: SinglePiece[] = []
  @Input() p2Pieces: SinglePiece[] = []
  @Input() p3Pieces: SinglePiece[] = []
  @Input() p4Pieces: SinglePiece[] = []

  get local_pieces(): Piece[] {
    return [
      ...this.p1Pieces.filter(p => p.currentPos === this.number),
      ...this.p2Pieces.filter(p => p.currentPos === this.number),
      ...this.p3Pieces.filter(p => p.currentPos === this.number),
      ...this.p4Pieces.filter(p => p.currentPos === this.number),

      ...this.p1Pieces.filter(p => p.currentPos === this.finalNumber),
      ...this.p2Pieces.filter(p => p.currentPos === this.finalNumber),
      ...this.p4Pieces.filter(p => p.currentPos === this.finalNumber),
      ...this.p3Pieces.filter(p => p.currentPos === this.finalNumber),
    ]
  }

  get canGrow(): boolean {
    return this.local_pieces.length < 3;
  }

  get minWidth(): number {
    return this.local_pieces.length > 9 ? 12 : 17
  }



  sp_piece_selected_pass(id: number) {
    this.spPieceSelected.emit(id);
  }

  sp_player_selected_pass(p: number) {
    this.spPlayerSelected.emit(p);
  }
}

export class SingleSpace {
  constructor(
    public star: boolean = false,
    public arrow: boolean = false,
    public color: string = "white",
    public count: boolean = true,
    public final_count = false
  ) { }

}