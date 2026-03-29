import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-piece',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './piece.component.html',
  styleUrl: './piece.component.css'
})
export class PieceComponent {

  @Output() pieceSelected = new EventEmitter<number>();
  @Output() playerSelected = new EventEmitter<number>();

  @Input() id: number = 0;
  @Input() currentPos: number = 0;
  @Input() selectedPiece: number = 0;
  @Input() selectedPlayer: number = 0;
  @Input() color: string = "";
  @Input() disabled: boolean = true;
  currentPlayer: number = 0;
  playerColor: string = "";


  selectPiece(id: number) {
    this.pieceSelected.emit(id);

    switch (this.color) {
      case "green": this.currentPlayer = 0; this.playerColor = "green"; break;
      case "yellow": this.currentPlayer = 1; this.playerColor = "yellow"; break;
      case "orange": this.currentPlayer = 2; this.playerColor = "orange"; break
      case "blue": this.currentPlayer = 3; this.playerColor = "blue"; break;
    }

    this.playerSelected.emit(this.currentPlayer);
  }

  get IsSelected(): boolean {
    const colors = ["green", "yellow", "orange", "blue"]
    return this.id === this.selectedPiece + 1 && this.color === colors[this.selectedPlayer]

  }

}

export class SinglePiece {
  constructor(
    public id: number = 0,
    public playerId: number = 0,
    public initPos: number = 0,
    public currentPos: number = 1000,
    public color: string = "white",
    public finalPos = 2000,
    public finalEnter = 2000,
    public finalExit = 2000,
    public squareEnter = 2000,
    public hasLooped = false,
    public disabled = true,
  ) { }


}
