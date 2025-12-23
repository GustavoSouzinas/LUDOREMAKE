import { Component, Input, OnInit } from '@angular/core';
import { PieceComponent, single_piece } from "../piece/piece.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circle-pieces',
  imports: [PieceComponent, CommonModule],
  templateUrl: './circle-pieces.component.html',
  styleUrl: './circle-pieces.component.css'
})
export class CirclePiecesComponent{


  @Input() color = '';
  @Input() pieces: single_piece[]=[];

  


  }


