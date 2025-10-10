import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-pieces',
  imports: [],
  templateUrl: './circle-pieces.component.html',
  styleUrl: './circle-pieces.component.css'
})
export class CirclePiecesComponent {

  @Input() color = '';

}
