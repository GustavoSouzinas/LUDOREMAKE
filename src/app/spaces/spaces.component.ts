import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SingleSpaceComponent, SingleSpace } from "../single-space/single-space.component";
import { SinglePiece } from "../piece/piece.component";

@Component({
  selector: 'app-spaces',
  imports: [CommonModule, SingleSpaceComponent],
  templateUrl: './spaces.component.html',
  styleUrl: './spaces.component.css'
})
export class SpacesComponent implements OnInit {

  firstSpaces: SingleSpace[] = []
  middleSpaces: SingleSpace[] = []
  lastSpaces: SingleSpace[] = []

  @Output() spPieceSelected = new EventEmitter<number>();
  @Input() spacesColor = '';
  @Input() selectedPiece = 0;
  @Input() selectedPlayer = 0;
  @Input() p1Pieces: SinglePiece[] = []
  @Input() p2Pieces: SinglePiece[] = []
  @Input() p3Pieces: SinglePiece[] = []
  @Input() p4Pieces: SinglePiece[] = []

  ngOnInit(): void {
    this.createClassFirstSpaces();
    this.createClassMiddleSpaces();
    this.createClassLastSpaces();
  }

  spPieceSelectedPass(id: number) {
    this.spPieceSelected.emit(id);
  }


  createClassLastSpaces() {

    for (let i = 0; i < 6; i++) {
      const item = new SingleSpace();

      if (i < 6) {
        item.color = this.spacesColor
      }
      if (i == 1) {
        item.arrow = true
        item.color = this.spacesColor
      }
      this.lastSpaces.push(item)
    }
  }

  createClassFirstSpaces() {

    for (let i = 0; i < 6; i++) {
      const item = new SingleSpace();
      if (i < 6) {
        item.color = this.spacesColor
      }
      if (i == 2) {
        item.star = true
        item.color = this.spacesColor
      }
      this.firstSpaces.push(item)
    }


  }

  createClassMiddleSpaces() {
    for (let i = 0; i < 6; i++) {
      const item = new SingleSpace();

      if (i < 1) {
        item.color = this.spacesColor;
      }

      if (i > 0) {
        item.color = "white";
        item.final_count = true;
        item.count = false;
      }
      this.middleSpaces.push(item);
    }

  }
}


