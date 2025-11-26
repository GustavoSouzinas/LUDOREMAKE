import { Component, Input } from '@angular/core';
import { PieceComponent } from "../piece/piece.component";

@Component({
  selector: 'app-circle-pieces',
  imports: [PieceComponent],
  templateUrl: './circle-pieces.component.html',
  styleUrl: './circle-pieces.component.css'
})
export class CirclePiecesComponent {

  @Input() color = '';

}
